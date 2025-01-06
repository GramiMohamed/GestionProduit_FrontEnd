// ajouter-produit.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css'],
})
export class AjouterProduitComponent {
  produit = {
    nom: '',
    prix: 0,
    categorie: ''
  };

  constructor(private produitService: ProduitService, private router: Router) {}

  ajouterProduit(): void {
    this.produitService.ajouterProduit(this.produit).subscribe(() => {
      this.router.navigate(['/produits']);
    });
  }
}
