import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from './../../../Models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: Product
}
