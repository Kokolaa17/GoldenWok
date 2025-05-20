import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APIconnectionService } from '../apiconnection.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart-page',
  imports: [RouterModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  constructor(private API: APIconnectionService, public cookies : CookieService){
    this.getCartItems()
  }

  public cartItems:any [] = [];

  getCartItems(){
    this.API.getCart().subscribe((data : any) => {
      this.API.transferProductsInCart.next(data.length)
      this.cartItems = data
    })
  }

  chooseQuantityDecrease(dish : any){
    console.log(dish)
     if(this.cookies.check("userLogedIn")){
      let quantity = dish.quantity

      if(quantity > 0) {
        quantity--
      }

        let cartInfo = {
          quantity: quantity,
          price: dish.price,
          productId: dish.product.id,
        };
      
        this.API.updateQuantity(cartInfo).subscribe({
          next: (data : any) => this.getCartItems()
        })
      }
    }

    chooseQuantityIncrease(dish : any){
    console.log(dish)
     if(this.cookies.check("userLogedIn")){
      let quantity = dish.quantity

      quantity++

      let cartInfo = {
        quantity: quantity,
        price: dish.price,
        productId: dish.product.id,
      };
    
      this.API.updateQuantity(cartInfo).subscribe({
        next: (data : any) => this.getCartItems()
      })
      }
    }

    deleteItemFromCart(dishID : any){
      this.API.deleteFormCart(dishID).subscribe({
        next: (data : any) => this.getCartItems()
      })
    }
}
