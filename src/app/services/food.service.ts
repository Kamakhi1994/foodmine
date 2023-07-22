import { Injectable } from '@angular/core';
import { Food } from '../shared/model/food';
import { sample_food, sample_tag } from 'src/data';
import { tag } from '../shared/model/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FOOD_URL, ID_URL, SEARCH_URL, TAGS_URL, TAG_URL} from 'C:/Users/Kps/Desktop/Angular/frontend/src/app/shared/consts/urls';
 
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http:HttpClient){}

    getAll():Observable<Food[]> {
      return this.http.get<Food[]>(FOOD_URL);
    }
    fooodsearch(food_term:string){
       return this.http.get<Food[]>(SEARCH_URL+food_term);     

    }
    getAlltag():Observable<tag[]>{
      return this.http.get<tag[]>(TAGS_URL)
    }
    getAllfoodbytag(tag:string){
      return tag==='All'?this.getAll():
      this.http.get<Food[]>(TAG_URL+tag)
    }
    getFoodbyid(foodID:string):Observable<Food>{
      return this.http.get<Food>(ID_URL+foodID)
    }
  
  
  }


  