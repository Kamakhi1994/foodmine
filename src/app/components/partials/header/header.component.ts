import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  cartquantity=0;
  constructor(cartservice:CartService){
    cartservice.getCartobservable().subscribe((newcart)=>
    this.cartquantity=newcart.count)

  }

}
