import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PatientService } from '../../service/patient.service';
import { CommonService } from '../../service/common.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark ,faFileImage,faPlusSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  isEdit = false;
  imagePreview: string | null = null;
  imageFormData: FormData = new FormData()

  // These would come from your service
  units: any[] = [];
  productTypes: any[] = [];

  faFileImage=faFileImage;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    private _Patientservice: PatientService,
    private _Commonservice: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = !!data;
    this.initForm();
  }

  ngOnInit() {

  }

  private initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      value: ['', Validators.required],
      unit_id: ['', Validators.required],
      product_type_id: ['', Validators.required],
      image: [null]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
  
      this.imageFormData.append('file', file);
  
      this.uploadImage(this.imageFormData); // No need to assign to a variable here
    }
  }
  
  uploadImage(formData: FormData) {
    this._Commonservice.uploadImg(formData).subscribe(
      (response) => {
        console.log('Image uploaded successfully', response);
  
        // Patch the form value here
        this.productForm.patchValue({ image: response });
  
        // Log the path after setting it
        console.log('Patched image path:', response);
      },
      (error) => {
        console.error('Error uploading image', error);
      }
    );
  }

  onSubmit() {
    if (this.productForm.valid) {
      // Create FormData for file upload
      const formData = new FormData();
      const formValue = this.productForm.value;

      Object.keys(formValue).forEach(key => {
        formData.append(key, formValue[key]);
      });

      this._Patientservice.create(formData).subscribe({
        next: (response) => {
          console.log('Product created successfully', response);
        },
        error: (error) => {
          console.error('Error creating product', error);
        }
      });

      this.dialogRef.close(formData);
    }
  }
}
