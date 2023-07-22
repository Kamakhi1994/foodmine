import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LOGIN_URL } from 'src/app/shared/consts/urls';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  login!:FormGroup;
  issubmitted=false;
  returnUrl=' ';

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private userService:UserService,private router:ActivatedRoute,private route:Router){ }
    
    ngOnInit(): void {
      this.login=this.formbuilder.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]], })
        this.returnUrl=this.router.snapshot.queryParams['returnUrl'];
  }
      get fc(){
        return this.login.controls;
      }
      submit(){
        this.issubmitted=true;
        if(this.login.invalid) return;

        alert(`email:${this.fc['email'].value},
        password:${this.fc['password'].value}`);

        this.userService.login(
          {email:this.fc['email'].value,password:this.fc['password'].value})
          this.route.navigateByUrl(this.returnUrl);
      }
    } 
