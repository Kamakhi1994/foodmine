import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  foods:Food[]=[];
  
  constructor( foodservice:FoodService,route:ActivatedRoute){
    route.params.subscribe((params)=>{
      if(params['food_term'])
      this.foods=foodservice.fooodsearch(params['food_term']);
      else if(params['tag']) {
        this.foods=foodservice.getAllfoodbytag(params['tag']);
      } 
      else
      this.foods=foodservice.getAll();
    })   
 
       
    
    }
    ngoninit(){
      
    }
    

  }


