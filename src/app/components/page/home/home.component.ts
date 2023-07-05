import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  foods:Food[]=[];
  constructor(private foodservice:FoodService){
    this.foods=foodservice.getAll();

  }

}
