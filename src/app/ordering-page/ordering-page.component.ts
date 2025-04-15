import { Component } from '@angular/core';
import { APIconnectionService } from '../apiconnection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordering-page',
  imports: [],
  templateUrl: './ordering-page.component.html',
  styleUrl: './ordering-page.component.scss'
})
export class OrderingPageComponent {
  constructor(public API: APIconnectionService, public routing: Router){
    this.Categorys()
    this.allProducts()
  }

  public displayProducts:any;
  public foodCategorys: any;
  public allFood: any;
  public filteredFoodByCategory:any;
  

  Categorys(){
    this.API.getCategorys().subscribe((data: any) => this.foodCategorys = data)
  }

  allProducts(){
    this.API.getAllProducts().subscribe((data: any) => {
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
}
