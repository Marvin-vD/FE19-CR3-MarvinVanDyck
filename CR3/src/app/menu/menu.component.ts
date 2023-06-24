import { Component } from '@angular/core';
import { Iproducts } from '../IProducts';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
// export class MenuComponent {
//   products:Iproducts[] = products;
// }

export class MenuComponent {
  products:Iproducts[] = products;
  id : number = 0;

  //ActivatedRoute
  constructor(private route : ActivatedRoute, private cartService:CartService){

  }
  addToCart(obj:Iproducts){
    alert("Your product has been added to the cart")
    this.cartService.addToCart(obj);
  }
}
