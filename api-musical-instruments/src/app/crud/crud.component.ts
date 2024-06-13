import { Component } from '@angular/core';
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent, NzFormLabelComponent} from "ng-zorro-antd/form";
import {NzColDirective} from "ng-zorro-antd/grid";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputDirective} from "ng-zorro-antd/input";
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
} from '@angular/forms';

import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzInputNumberComponent} from "ng-zorro-antd/input-number";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { Validators as MyValidators } from '@angular/forms';
import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  validateForm: FormGroup<{
    instrumentName: FormControl<string>;
    description: FormControl<string>;
    type: FormControl<string>;
    model: FormControl<string>;
    color: FormControl<string>;
    image: FormControl<string>;
    price: FormControl<number>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
        this.apiService.create(this.validateForm.value).subscribe(() => {
          this.createNotification('success', `${this.validateForm.value.instrumentName} ${this.validateForm.value.description}` ,"Employee has been created successfully!")
      this.validateForm.reset();
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  createNotification(type: string, title:string,  message: string): void {
    this.notification.create(
      type,
      title,message
    );
  }

  constructor(
    private fb: NonNullableFormBuilder,
  private apiService: InstrumentService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      instrumentName: ['', [required]],
      description: ['', [required]],
      type: ['', [required]],
      model: ['', [required]],
      color: ['', [required]],
      image: ['', [required]],
      price: [0, [required]]
    });
  }
}
