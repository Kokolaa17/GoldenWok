import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIconnectionService {

  constructor(private http: HttpClient) { 
    this.getCategorys()
    this.getAllProducts()
    this.getCart()
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
}
