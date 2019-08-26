import { Component, OnInit } from '@angular/core';
import {Produit} from '../model/produit.model';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produit: Produit;
  produits: Produit[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProducts()
      .subscribe( data => {
        this.produits = data.result;
      });
  }

}
