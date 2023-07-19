import { Injectable } from '@angular/core';
import { cart } from '../shared/model/Cart';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/model/food';
import { CartItem } from '../shared/model/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart=this.getItemfromLocalstorage();
  private cartSubject:BehaviorSubject<cart>=new BehaviorSubject(this.cart)


  constructor() { }

  addTocart(food:Food){
    let cartItem=this.cart.Item.find(item=>item.food.id=== food.id)
    if(cartItem)
      return;

    this.cart.Item.push(new CartItem(food))
    this.setCartTolocalStorage()
  }
  removeFromcart(foodID:string):void{
    this.cart.Item=this.cart.Item.filter(item=>item.food.id!==foodID)
    this.setCartTolocalStorage()
  }
  changeCartitem(foodID:string,quantity:number){
    let cartItem=this.cart.Item.find(item=>item.food.id==foodID)
    if(!cartItem) return

    cartItem.quantity=quantity;
    cartItem.price=quantity*cartItem.food.price;
    this.setCartTolocalStorage()
  }
  clearCart(){
    this.cart=new cart();
    this.setCartTolocalStorage()
  }
  getCartobservable(){
    return this.cartSubject.asObservable();
  }
  setCartTolocalStorage():void{
    this.cart.price=this.cart.Item.reduce((prevsum,cuurItem)=>prevsum=prevsum+cuurItem.price,0)
    this.cart.count=this.cart.Item.reduce((prevcount,currcount)=>prevcount=prevcount+currcount.quantity,0)
    let cartJson=JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson)
    this.cartSubject.next(this.cart);
  }
  private getItemfromLocalstorage():cart{
    const cartjson=localStorage.getItem('Cart');
    return cartjson? JSON.parse(cartjson):new cart()
  }
}
