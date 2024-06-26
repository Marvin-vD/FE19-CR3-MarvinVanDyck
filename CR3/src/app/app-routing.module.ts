import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [{
  path:"",component:HomeComponent
},{
  path:"product/:indexFromRouting", component: DetailsComponent
},{
  path:"menu", component: MenuComponent
},{
  path:"about", component: AboutUsComponent
},{
  path:"cart", component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
