import { Injectable } from '@angular/core';
import { Iproducts } from './IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = [];
  constructor() { }

  addToCart(obj:Iproducts){
    this.cart.push(obj);
  }
  getItems(){
    return this.cart;
  }
  clearCart(){
    this.cart=[];
    return this.cart
  }
  getLength(){
    let cartLength: number = this.cart.length;
    return cartLength;
  }
  calculateTotal(){
    let total : number = 0;
    for(let val of this.cart){
      total += val.price;
    }
    return total;
  }
}
