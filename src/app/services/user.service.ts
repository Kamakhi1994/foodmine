import { Injectable } from '@angular/core';
import { user } from '../shared/model/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Iuserlogin } from '../shared/Interfaces/Iuserlogin';
import { HttpClient } from '@angular/common/http';
import { LOGIN_URL } from '../shared/consts/urls';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  private usersubject=new BehaviorSubject<user>(new (user));
  public userobservable:Observable<user>

  constructor(private http:HttpClient,private toastr:ToastrService) { 
    this.userobservable=this.usersubject.asObservable();
  }
  login(userlogin:Iuserlogin):Observable<user>{
   return this.http.post<user>(LOGIN_URL,userlogin).pipe(tap({
    next:(user)=>{
      this.usersubject.next(user);
      this['toastrService'].success(
        `Welcome to foodmine ${user.name}`
      )

    },
    error:(errorResponse)=>{
this.toastr.error(errorResponse.error,'Login failed');
    }

   }));

  }
}
