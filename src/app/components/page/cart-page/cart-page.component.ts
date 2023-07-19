import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { cart } from 'src/app/shared/model/Cart';
import { CartItem } from 'src/app/shared/model/cartitem';
import { Food } from 'src/app/shared/model/food';
import { NotfoundComponent } from '../../partials/notfound/notfound.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.less']
})
export class CartPageComponent {
  cart!:cart
  constructor(private cartservice:CartService){
    this.cartservice.getCartobservable().subscribe((cart: cart)=>{
      this.cart=cart;
    })
   
  }
  removeFromcart(cartitem:CartItem){
    this.cartservice.removeFromcart(cartitem.food.id);
  }
  changequantity(foodid:CartItem,quantity:string){
    this.cartservice.changeCartitem(foodid.food.id,parseInt(quantity))
  }

}
