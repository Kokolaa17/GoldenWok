import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category';
import { CategoryProducts } from './category-products';
import { CartProduct } from './cart-product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIconnectionService {

  constructor(private http: HttpClient) { 

  }

  public transferProductsInCart: Subject<number> = new Subject;

  getCategorys(){
    return this.http.get<Category[]>("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getAllProducts(){
    return this.http.get<CategoryProducts>("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  categoryFiltration(categoryId : number){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${categoryId}`)
  }

  getCart(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  register(body : any){
    return this.http.post("https://api.everrest.educata.dev/auth/sign_up", body)
  }

  logIn(body : any){
    return this.http.post("https://api.everrest.educata.dev/auth/sign_in", body)
  }

  getUserPage(){
    return this.http.get<any>("https://api.everrest.educata.dev/auth")
  }

  addToCart(body: CartProduct) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
  }

  updateQuantity(body : CartProduct){
    return this.http.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }

  deleteFormCart(itemToDelete : number){
    return this.http.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${itemToDelete}`)
  }
}
