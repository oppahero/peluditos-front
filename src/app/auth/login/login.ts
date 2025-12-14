import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { Auth } from '../../core/services/auth';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { LoginResponse } from '../../core/interfaces/login-response';

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
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(Auth);

  formSubmitted = signal(false);
  errorMessage = signal('');

  form = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.maxLength(10)]],
    rememberMe: [false],
  });

  onSubmit() {
    this.formSubmitted.set(true);
    this.errorMessage.set('');

    if (this.form.invalid) return;

    const data = {
      username: this.form.value.username ?? '',
      password: this.form.value.password ?? '',
    };

    this.authService
      .login(data)
      .subscribe({
        next: (res) => this.success(res),
        error: (err) => this.errorMessage.set(err?.detail ?? 'Error inesperado'),
      })
      .add(() => this.formSubmitted.set(false));
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }

  success(res: LoginResponse) {
    this.router.navigate(['/dashboard']);
  }
}
