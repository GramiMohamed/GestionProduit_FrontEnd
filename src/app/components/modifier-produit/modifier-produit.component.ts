// modifier-produit.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-produit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css'],
})
export class ModifierProduitComponent implements OnInit {
  produit: any = {};

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.produitService.getProduitById(id).subscribe((data) => {
      this.produit = data;
    });
  }

  modifierProduit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.produitService.modifierProduit(id, this.produit).subscribe(() => {
      this.router.navigate([`/produits/${id}`]);
    });
  }
}
