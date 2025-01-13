import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,FontAwesomeModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  imgSelected: string | undefined;
  loading: boolean = true;
  error: boolean = false;
  faXmark = faXmark;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private _dialogRef: MatDialogRef<PictureComponent>,
  ) {

  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  ngOnInit(): void {
    this.imgSelected = environment.ImageURL + this._data.imgSelected;
    console.log(this.imgSelected);
    
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  onImageLoad(): void {
    this.loading = false;
    this.error = false;
  }

  closeDialog(): void {
    this._dialogRef.close();
  }

}