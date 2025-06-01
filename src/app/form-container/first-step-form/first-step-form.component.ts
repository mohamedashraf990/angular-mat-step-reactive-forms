import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {
  firstNameIsInvalid,
  lastNameIsInvalid,
  emailIsInvalid,
  phoneIsInvalid,
} from '../validation';

@Component({
  selector: 'app-first-step-form',
  standalone: true,
  imports: [
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './first-step-form.component.html',
  styleUrl: './first-step-form.component.css',
})
export class FirstStepFormComponent {
  @Input({ required: true }) personalgroup!: FormGroup;
  get firstNameInvalid() {
    return firstNameIsInvalid(this.personalgroup);
  }
  get lastNameInvalid() {
    return lastNameIsInvalid(this.personalgroup);
  }
  get emailInvalid() {
    return emailIsInvalid(this.personalgroup);
  }
  get phoneInvalid() {
    return phoneIsInvalid(this.personalgroup);
  }
}
