import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../IProducts';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Iproducts[] = [];
  total:number[] = [];
  
  constructor(private cartService: CartService){}

  info = new FormGroup({
    name: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
  });
  onPurchase(){
      if(this.info.valid){
        var v = this.info.value;
     }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getItems()
    this.total = this.cartService.calculateTotal();
  }

}

export class Form{

}
