import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { FoodComponent } from './components/paritals/food/food.component';
import { CartPageComponent } from './components/page/cart-page/cart-page.component';
import { CheckOutComponent } from './components/partials/check-out/check-out.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:food_term',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'food/:id',component:FoodComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'check out',component:CheckOutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
