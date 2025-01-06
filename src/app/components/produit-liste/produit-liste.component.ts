// produit-liste.component.ts
import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit-liste',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './produit-liste.component.html',
  styleUrls: ['./produit-liste.component.css'],
})
export class ProduitListeComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data) => {
      this.produits = data;
    });
  }

  supprimerProduit(id: string): void {
    this.produitService.supprimerProduit(id).subscribe(() => {
      this.produits = this.produits.filter((p) => p._id !== id);
    });
  }

  voirDetails(id: string): void {
    this.router.navigate([`/produits/${id}`]);
  }

  modifierProduit(id: string): void {
    this.router.navigate([`/produits/modifier/${id}`]);
  }
}
