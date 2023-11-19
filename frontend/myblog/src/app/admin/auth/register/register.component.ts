import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Validation from '../../utils/validation';
import Swal from 'sweetalert2';
import { ErrorToast, SuccessToast } from 'src/constants';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    username: new FormControl(''),
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
      name: ['', Validators.required],
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      gender: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', 
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },
    {
      validators: [Validation.match('password', 'confirmPassword')],
    }
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      console.log('invalid')
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.toRegister();
  }
  toRegister() {
    this.authService.register(this.form.value)?.subscribe(
      (data: any) => {
        console.log(data)
        if (data.hasOwnProperty('token')) {
          this.authService.setCredentials(this.form.get('username')?.value, this.f['email'].value, this.f['name'].value, data['token'] )
          this.successNotification()
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.errorNotification();
        }
      }
    );
    
  }
  successNotification() {
    SuccessToast.fire('Hi', 'Account created successfully!', 'success');
  }

  errorNotification() {
    ErrorToast.fire('Hi', 'Account creation failed!', 'error');
  }
}
