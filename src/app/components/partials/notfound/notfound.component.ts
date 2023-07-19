import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.less']
})



export class NotfoundComponent {
  @Input()
  visible=false;
  @Input()
  notfoundmessage="Nothing found!";
  @Input()
  resetLinktext="Reset"
  @Input()
  resetLinkroute="/"
}
