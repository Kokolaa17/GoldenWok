import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { APIconnectionService } from '../apiconnection.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-details-page',
  imports: [RouterModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {

  public details:any;

  constructor(public activeR: ActivatedRoute, private https : APIconnectionService, public cookies : CookieService){
    this.getDetails()
  }


  getDetails(){
    this.activeR.queryParams.subscribe((data:any) => this.details = data)
  }

  addToCart(food: any) {
    if(this.cookies.check("userLogedIn")){
        let cartInfo = {
          quantity: 1,
          price: food.price,
          productId: food.id,
        };
      
        this.https.addToCart(cartInfo).subscribe(() => {
          alert("Product added to cart successfully!")
        });

        this.getCartItems()
    }
    else {
      alert("You need to be logged in to perform this action!")
    }
  }

  getCartItems(){
    this.https.getCart().subscribe((data : any) => {
      this.https.transferProductsInCart.next(data.length)
    })
  }

}
