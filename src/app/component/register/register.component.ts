import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  repeatPass: string = 'none';
  registerDetails: Register = {
    Name: '',
    Password: '',
    Company: '',
    Email: '',
    Phone: '',
    PreferencesTechnology: ''
  }
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {}
  registerForm = new FormGroup({
    name: new FormControl("", [
      // Validators.required,
      // Validators.minLength(2),Validators.pattern("[a-zA-Z].*")
    ]),
    email: new FormControl("", [
      // Validators.required,
      // Validators.minLength(2),Validators.email
    ]),
    password: new FormControl("", [
      // Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(15)
    ]),
    confirmpassword: new FormControl(""),
    phone: new FormControl("", [
      // Validators.required,Validators.minLength(10),
      // Validators.maxLength(10)
    ]),
    preferencesTechnology: new FormControl(""),
    company: new FormControl("")


  });
  onSubmit() {
    if (this.Password.value == this.ConfirmPassword.value) {
      // console.log(this.registerForm.valid);
      this.repeatPass = 'none';

      this.authService.registerUser(this.registerDetails).subscribe((res: any) => {
        // console.log(res);
        if (res.IsSuccess == false)
          alert(res.Message("Registration Failed"));
        else {
          this.router.navigateByUrl("");
        }
      })
    } 
    else 
    {
      this.repeatPass = 'inline'
    }
  }
  get Name(): FormControl {
    return this.registerForm.get("name") as FormControl;
  }
  get Company(): FormControl {
    return this.registerForm.get("company") as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  get Phone(): FormControl {
    return this.registerForm.get("phone") as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }
  get ConfirmPassword(): FormControl {
    return this.registerForm.get("confirmpassword") as FormControl;
  }
  get PreferencesTechnology(): FormControl {
    return this.registerForm.get("preferencesTechnology") as FormControl;
  }
}
