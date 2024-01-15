import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone',
    color: 'Matte Black',
    price: 799,
    inStock: 5,
    discountPercentage: 9,
    pImage: "assets/iphone.png"
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discountPercentage / 100);
  }

  // onNameChanged(event: any) {
  //   this.name = event.target.value;
  // }

  incrementCartCounter() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
      console.log(this.addToCart);
    }
  }

  decrementCartCounter() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }
}
