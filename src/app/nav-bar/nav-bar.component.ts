import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APIconnectionService } from '../apiconnection.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public API: APIconnectionService){
    this.getCartItemsNumber()
  }

  public itemsInCart:any;

  getCartItemsNumber(){
    this.API.getCart().subscribe((data:any) => this.itemsInCart = data.length)  
  }
}
