import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RecoveryModalComponent } from '../recovery-modal/recovery-modal.component';
import { AuthService } from '../service/auth.service';
import { KeyService } from '../service/key.service';
import { Router } from '@angular/router';

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
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  recoveryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialog: MatDialog,
    private _KeyService: KeyService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    localStorage.clear();
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      
      data.password = await this._KeyService.encryptPassword(data.password);
      
      this.authService.login(data).subscribe((roleId) => {
        if (roleId === 1) {
          this.router.navigate(['/dashboard']); // Full access
        } else {
          this.router.navigate(['/dashboard']); // Limited access
        }
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
