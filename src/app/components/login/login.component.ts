import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup ;
  fieldTextType:boolean = false;
  errorMessage: string;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private route: Router) {
  }
ngOnInit() {
  this.loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required] // password would ideally be hashed
  });
}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.username,this.loginForm.value.password).subscribe({
        next:(response)=>{
          this.route.navigate([`dashBoard`])
        },
        error:(error)=>{
          this.errorMessage = 'Wrong username or password';
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.fieldTextType = !this.fieldTextType;
  }
}
