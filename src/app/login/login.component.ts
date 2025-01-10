import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RecoveryModalComponent } from '../recovery-modal/recovery-modal.component';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class LoginComponent {
  loginForm: FormGroup;
  recoveryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: ServiceService,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => alert('Login successful!'),
        error: () => alert('Invalid credentials.'),
      });
    }
  }

  openRecoveryModal() {
    const dialogRef = this.dialog.open(RecoveryModalComponent, {
      data: this.recoveryForm,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        alert('Recovery link sent!');
      }
    });
  }
}
