import { Component } from '@angular/core';
import { APIconnectionService } from '../apiconnection.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Category } from '../category';
import { CategoryProducts } from '../category-products';

@Component({
  selector: 'app-ordering-page',
  imports: [],
  templateUrl: './ordering-page.component.html',
  styleUrl: './ordering-page.component.scss'
})
export class OrderingPageComponent {
  constructor(private API: APIconnectionService, public routing: Router, public cookies : CookieService){
    this.Categorys()
    this.allProducts()
  }

  public displayProducts:any;
  public foodCategorys: any;
  public allFood: any;
  public filteredFoodByCategory:any;
  

  Categorys(){
    this.API.getCategorys().subscribe((data: Category[]) => this.foodCategorys = data)
  }

  allProducts(){
    this.API.getAllProducts().subscribe((data: CategoryProducts) => {
      this.displayProducts = [];
      this.displayProducts = data;
    })
  }

  filterByCategory(categoryId: number){
    this.displayProducts = [];
    this.API.categoryFiltration(categoryId).subscribe((data: any) => this.displayProducts = data.products);
  }
  
  showDetails(details: any){
    this.routing.navigate(["/details"], {queryParams: details})
  }

  addToCart(food: any) {
    if(this.cookies.check("userLogedIn")){
        let cartInfo = {
          quantity: 1,
          price: food.price,
          productId: food.id,
        };
      
        this.API.addToCart(cartInfo).subscribe(() => {
           this.getCartItems()
          alert("Product added to cart successfully!")
        });
    }
    else {
      alert("You need to be logged in to perform this action!")
    }
  }

   getCartItems(){
    this.API.getCart().subscribe((data : any) => {
      console.log(data.length)
      this.API.transferProductsInCart.next(data.length)
    })
  }
}
