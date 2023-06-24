import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../IProducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:Iproducts = {}as Iproducts;
  id : number = 0;

  //ActivatedRoute
  constructor(private route : ActivatedRoute, private cartService:CartService){

  }
  addToCart(){
    alert("Your product has been added to the cart")
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
     this.id = +params['indexFromRouting'];
     this.product = products[this.id];
   });
}

}
