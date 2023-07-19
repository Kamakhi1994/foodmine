import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  food_term='';
  constructor(route:ActivatedRoute,private router:Router ){
    route.params.subscribe((params)=>{
      if(params['food_term'])
      this.food_term=params['food_term']
    })
    
  }
  search(term:string){
    if(term)
    this.router.navigateByUrl('/search'+'/'+term );
  }

}
