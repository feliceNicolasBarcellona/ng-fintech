import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email:['', [Validators.required, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
    name:['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required]
  })

  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
