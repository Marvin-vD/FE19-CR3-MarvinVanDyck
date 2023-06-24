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
    // to take the values from the form you can select the property that have the formGroup and then just add .value´
      if(this.info.valid){
        var a = this.info.value;
        console.log(a);
     }
  }

  ngOnInit(): void {
    this.cart = this.cartService.getItems()
    this.total = this.cartService.calculateTotal();
  }

}

export class Form{

}
