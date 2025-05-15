import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APIconnectionService } from '../apiconnection.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  constructor(public API: APIconnectionService, public cookies : CookieService){
    this.getCartItemsNumber()
  }

  ngOnInit(): void {

    let wasLoggedIn = false;

    setInterval(() => {

      const isNowLoggedIn = this.cookies.check("userLogedIn");

      if (isNowLoggedIn && !wasLoggedIn) {
        this.getNavBarLogin();
      }

      wasLoggedIn = isNowLoggedIn;
    }, 1000);

  }

  public itemsInCart:any;
  public userFirstName: string = ""
  public avatar : string = ""

  getCartItemsNumber(){
    this.API.getCart().subscribe((data:any) => this.itemsInCart = data.length)  
  }

  getNavBarLogin(){
      this.API.getUserPage().subscribe((data : any) => {
        console.log(data)
        this.avatar = data.avatar
        this.userFirstName = data.firstName
      })
  }
}
