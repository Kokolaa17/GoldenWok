import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterPlaceComponent } from "./footer-place/footer-place.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterPlaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularGoldenWok';
}
