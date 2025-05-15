import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIconnectionService {

  constructor(private http: HttpClient) { 

  }

  getCategorys(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getAllProducts(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  categoryFiltration(categoryId : number){
    return this.http.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${categoryId}`)
  }

  getCart(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  addToCart(body: any) {
    return this.http.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", body)
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
}
