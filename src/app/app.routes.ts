import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OrderingPageComponent } from './ordering-page/ordering-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
    {path: "", component: HomePageComponent},
    {path: "order", component: OrderingPageComponent},
    {path: "details", component: DetailsPageComponent},
    {path: "cart", component: CartPageComponent},
    {path: "login", component: LoginPageComponent},
];
