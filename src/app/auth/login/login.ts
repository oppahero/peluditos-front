import { LoginCredentials } from '../../core/interfaces/login-credentials.interface';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthFacade } from '../../core/services/auth/auth-facade';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { FloatLabel } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { finalize } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  NonNullableFormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FloatLabel,
    ButtonModule,
    MessageModule,
    CheckboxModule,
    PasswordModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private fb = inject(NonNullableFormBuilder);
  private authFacade = inject(AuthFacade);

  formSubmitted = signal(false);
  loading = signal(false);
  errorMessage = signal<null | string>(null);

  form: FormGroup = this.fb.group({
    username: new FormControl<string>('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl<string>('', [Validators.required, Validators.maxLength(10)]),
    rememberMe: new FormControl<boolean>(false),
  });

  onSubmit() {
    this.formSubmitted.set(true);
    this.loading.set(true);

    if (this.form.invalid) return;

    this.authFacade
      .login(this.form.getRawValue() as LoginCredentials)
      .pipe(
        finalize(() => {
          this.formSubmitted.set(false);
          this.loading.set(false);
        })
      )
      .subscribe({
        error: (err) => this.errorMessage.set(err.message),
      });
  }

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted());
  }
}
