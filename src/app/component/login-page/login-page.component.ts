import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginDetails:Login={
    Email:"",
    Password:""
   }
   
   constructor(private route:ActivatedRoute,private loginAuth:AuthService,private router:Router){}
 
  ngOnInit(): void {}
 
  loginForm=new FormGroup({
    username:new FormControl('',
    [
     // Validators.required,Validators.email
    ]),
    password:new FormControl('',
    [
      // Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(15)
    ]),
  });
  get Username():FormControl{
    return this.loginForm.get("username") as FormControl;
  }
  get Password():FormControl{
    return this.loginForm.get("password") as FormControl;
  }
  isUserValid:boolean=false;
  login()
  {
    console.log(this.loginDetails);
    this.loginAuth.loginUser(this.loginDetails)
    .subscribe((res:any)=>{
      console.log(res.token);
      if(res.token==null)
      {
        console.log(res);
        this.isUserValid=false;
        console.log(res.Message);
      }
      else{
        console.log(res);
        this.isUserValid=true;
        this.loginAuth.setToken(res.token);
        this.router.navigateByUrl('dashboard');
      }
    })
  }
}
