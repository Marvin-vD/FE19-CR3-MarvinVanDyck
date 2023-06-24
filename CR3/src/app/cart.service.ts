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
    let total : number[] = [0,0,0,0];
    for(let val of this.cart){
      total[0] += val.price;
      total[1] = total[0]/100*10;
      if(total[0] > 40){
        total[2] = total[0]/100*15;
        total[3] = total[0] + total[1] - total[2]
      }
      else{
        total[3] = total[0] + total[1];
      }
    }
    return total;
  }
}
