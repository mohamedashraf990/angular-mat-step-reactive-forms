import { Component, Input } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {
  addressIsInvalid,
  cityIsInvalid,
  stateIsInvalid,
  zipIsInvalid,
  addressFormIsInvalid,
} from '../validation';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-second-step-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './second-step-form.component.html',
  styleUrl: './second-step-form.component.css',
})
export class SecondStepFormComponent {
  @Input({ required: true }) addressGroup!: FormGroup;

  get addressInvalid() {
    return addressIsInvalid(this.addressGroup);
  }
  get cityInvalid() {
    return cityIsInvalid(this.addressGroup);
  }
  get stateInvalid() {
    return stateIsInvalid(this.addressGroup);
  }
  get zipInvalid() {
    return zipIsInvalid(this.addressGroup);
  }
  get addressFormInvalid() {
    return addressFormIsInvalid(this.addressGroup);
  }
  get addressLinesArray() {
    return this.addressGroup.get('addressLines') as FormArray;
  }
  addAddressLine() {
    this.addressLinesArray.push(new FormControl('', Validators.required));
  }

  removeAddressLine(index: number) {
    if (this.addressLinesArray.length > 1) {
      this.addressLinesArray.removeAt(index);
    }
  }
}
