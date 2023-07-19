import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { tag } from 'src/app/shared/model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent {
  tags?:tag[];
  constructor(foodservice:FoodService){
    this.tags=foodservice.getAlltag();
  }

}
