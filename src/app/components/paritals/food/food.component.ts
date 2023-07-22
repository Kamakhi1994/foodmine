import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.less']
})
export class FoodComponent implements OnInit {
  food!:Food;
  constructor(route:ActivatedRoute,foodservice:FoodService,private cartservice:CartService,private router:Router){
    route.params.subscribe(param=>{
      if(param['id'])
      foodservice.getFoodbyid(param['id']).subscribe(serverfood=>{
        this.food=serverfood;
      })
    })

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addTocart(){
    this.router.navigateByUrl('/cart-page');
    this.cartservice.addTocart(this.food);
  }


}
