import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent  {
  foods:Food[]=[];
  
  constructor(private foodservice:FoodService,private route:ActivatedRoute){
    let foodObservbale:Observable<Food[]>;
    route.params.subscribe((params)=>{
      if(params['food_term'])
      foodObservbale=foodservice.fooodsearch(params['food_term']);
      else if(params['tag']) {
        foodObservbale=foodservice.getAllfoodbytag(params['tag']);
      } 
      else
      foodObservbale=foodservice.getAll();
      foodObservbale.subscribe((serverfood)=>{
        this.foods=serverfood;
      })
    })   
 
       
    
    }
  OnInit(): void {
    
  }
    

  }


