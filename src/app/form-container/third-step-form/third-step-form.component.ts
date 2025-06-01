import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-step-form',
  standalone: true,
  imports: [],
  templateUrl: './third-step-form.component.html',
  styleUrl: './third-step-form.component.css',
})
export class ThirdStepFormComponent {
  @Input({ required: true }) summaryStepGroup!: FormGroup;
  get thirdStepInvalid() {
    return this.summaryStepGroup.invalid;
  }
}
