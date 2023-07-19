import { Injectable } from '@angular/core';
import { Food } from '../shared/model/food';
import { sample_food, sample_tag } from 'src/data';
import { tag } from '../shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(){}

    getAll(): Food[] {
      return sample_food;
    }
    fooodsearch(food_term:string){
       return this.getAll().filter(food=>food.name.toLowerCase().includes(food_term.toLocaleLowerCase()));     

    }
    getAlltag():tag[]{
      return sample_tag
    }
    getAllfoodbytag(tag:string){
      return tag==='All'?this.getAll():
      this.getAll().filter(food=>food.tags?.includes(tag))
    }
    getFoodbyid(foodID:string):Food{
      return this.getAll().find(food=>food.id===foodID)?? new Food();
    }
  
  
  }


  