import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail',  Selector is only used when its nested in any component 
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = "";
  product : IProduct;
  constructor() { }

  ngOnInit() {
  }

}
