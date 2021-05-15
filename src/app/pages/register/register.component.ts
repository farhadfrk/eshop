import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contains } from 'jquery';
import { RegisterDto } from 'src/app/DTOs/Account/RegisterDto';
import { AuthService } from 'src/app/services/auth.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerFormGroup:FormGroup;
  @ViewChild('sweetAlert') private sweetAlert: SwalComponent;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.registerFormGroup = new FormGroup({
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ]
      ),
      firstName: new FormControl(
        null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ),
      lastName: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      confirmPassword: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(100)
        ]),
      address: new FormControl(null,
        [
          Validators.required,
          Validators.maxLength(500)
        ])
    });
  }
  submitRegisterForm(){
    const registerData=new RegisterDto(
    this.registerFormGroup.controls.email.value,
    this.registerFormGroup.controls.firstName.value,
    this.registerFormGroup.controls.lastName.value,
    this.registerFormGroup.controls.password.value,
    this.registerFormGroup.controls.confirmPassword.value,
    this.registerFormGroup.controls.address.value,
    )
    this.authservice.registerUser(registerData).subscribe(res=>{
      console.log(res);
      if (res.status === 'Success') {
        this.registerFormGroup.reset();
      }
      if (res.status === 'Error') {
        if (res.data.info === 'EmailExist') {
          this.sweetAlert.fire();
        }
      }
    });
  }

}
