import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { personalFormIsInvalid, addressFormIsInvalid } from './validation';
import { FirstStepFormComponent } from './first-step-form/first-step-form.component';
import { SecondStepFormComponent } from './second-step-form/second-step-form.component';
import { ThirdStepFormComponent } from './third-step-form/third-step-form.component';

@Component({
  selector: 'app-form-container',
  standalone: true,
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FirstStepFormComponent,
    SecondStepFormComponent,
    ThirdStepFormComponent,
  ],
  templateUrl: './form-container.component.html',
  styleUrl: './form-container.component.css',
})
export class FormContainerComponent {
  mainForm = new FormGroup({
    personal: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
    }),
    address: new FormGroup({
      addressLines: new FormArray([new FormControl('', Validators.required)]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', [Validators.required]),
    }),
  });

  get personalGroup() {
    return this.mainForm.get('personal') as FormGroup;
  }
  get addressGroup() {
    return this.mainForm.get('address') as FormGroup;
  }
  get personalFormInvalid() {
    return personalFormIsInvalid(this.mainForm);
  }
  get addressFormInvalid() {
    return addressFormIsInvalid(this.mainForm);
  }

  onSubmit() {
    if (this.mainForm.valid) {
      console.log('Form submitted', this.mainForm.value);
    }
  }
}
