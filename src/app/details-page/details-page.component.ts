import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-details-page',
  imports: [RouterModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent {

  public details:any;

  constructor(public activeR: ActivatedRoute){
    this.getDetails()
  }


  getDetails(){
    this.activeR.queryParams.subscribe((data:any) => this.details = data)
  }

}
