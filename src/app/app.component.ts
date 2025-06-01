import { Component } from '@angular/core';
import { FormContainerComponent } from './form-container/form-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-multi-step-form';
}
