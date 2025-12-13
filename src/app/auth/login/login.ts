import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageModule } from 'primeng/message';
import { Auth } from '../../core/services/auth';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    CheckboxModule,
    PasswordModule,
    MessageModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(Auth);

  // Signals para estado reactivo local
  loading = signal(false);
  formSubmitted = signal(false);
  errorMessage = signal('');

  form = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.maxLength(10)]],
    rememberMe: [false],
  });

  onSubmit() {
    if (this.form.invalid) return;

    console.log('Form Value', this.form.value);

    const data = {
      username: this.form.value.username ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService
      .login(data)
      .pipe(
        catchError((err) => {
          this.loading.set(false);
          return of(null);
        })
      )
      .subscribe((res) => {
        console.log('Login Response:', res);
        // this.router.navigate(['/dashboard']);
      });
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
