// produit.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:5000/api/produits';

  constructor(private http: HttpClient) { }

  getProduitById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching product by ID', error);
        return of(null);
      })
    );
  }

  ajouterProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit).pipe(
      catchError(error => {
        console.error('Error adding product', error);
        return of(null);
      })
    );
  }

  modifierProduit(id: string, produit: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produit).pipe(
      catchError(error => {
        console.error('Error updating product', error);
        return of(null);
      })
    );
  }

  supprimerProduit(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error deleting product', error);
        return of(null);
      })
    );
  }

  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching products', error);
        return of([]);
      })
    );
  }
}
