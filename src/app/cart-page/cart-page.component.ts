import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APIconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-cart-page',
  imports: [RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  constructor(public API: APIconnectionService){
    this.getCartItems()
  }

  public cartItems:any [] = [];

  getCartItems(){
    this.API.getCart().subscribe((data : any) => this.cartItems = data)
  }

}
