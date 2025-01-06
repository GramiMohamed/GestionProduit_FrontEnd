// produit-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produit-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css'],
})
export class ProduitDetailsComponent implements OnInit {
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

  goBack(): void {
    this.router.navigate(['/produits']);
  }
  modifierProduit(id: string): void {
    this.router.navigate([`/produits/modifier/${id}`]);
  }
}
