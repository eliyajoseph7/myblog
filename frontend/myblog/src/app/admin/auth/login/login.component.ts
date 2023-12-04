import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessToast, ErrorToast } from 'src/constants';
import Validation from '../../utils/validation';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submitted = false;

  constructor(
    private formbuilder: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = this.formbuilder.group({
      email: ['', [
        Validators.email,
        Validators.required
      ],
    ],
      password: ['',
        Validators.required,
      ],
    },
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      // console.log('invalid')
      return;
    }

    // console.log(JSON.stringify(this.form.value, null, 2));
    this.toLogin();
  }
  toLogin() {
    this.authService.login(this.form.value)?.subscribe(
      (data: any) => {
        var success = true;
        try {
          success = data.body.hasOwnProperty('token');
        } catch (error) {
          success = false;
        }
       
        if (success) {
          this.authService.setCredentials(data.body.user.username, data.body.user.email, data.body.user.name, data.body.token)
          this.successNotification()
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorNotification();
        }
      }
    );

  }
  successNotification() {
    SuccessToast.fire('Hi', 'Loggedin successfully!', 'success');
  }

  errorNotification() {
    ErrorToast.fire('Hi! Login failed!', ' Credentials are incorrect', 'error');
  }
}
