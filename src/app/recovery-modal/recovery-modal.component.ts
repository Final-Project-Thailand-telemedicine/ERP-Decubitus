import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recovery-modal',
  standalone: true,
  templateUrl: './recovery-modal.component.html',
  styleUrls: ['./recovery-modal.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class RecoveryModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormGroup,
    private dialogRef: MatDialogRef<RecoveryModalComponent>
  ) {}

  sendRecoveryLink() {
    if (this.data.valid) {
      this.dialogRef.close(true);
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
