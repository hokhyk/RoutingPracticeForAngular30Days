import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterState } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  name = '';

  ngOnInit() {
    this
    .route
    .data
    .subscribe(
      (data: { product: Product }) => {
        this.name = data.product.name;
      }
    );
  }

}
