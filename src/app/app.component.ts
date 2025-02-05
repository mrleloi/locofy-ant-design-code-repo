import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AntButtonComponent } from './components/ant-button/ant-button.component';
import { AntInputComponent } from './components/ant-input/ant-input.component';
import { AntTextareaComponent } from './components/ant-textarea/ant-textarea.component';
import { AntCheckboxComponent } from './components/ant-checkbox/ant-checkbox.component';
import { AntRadioComponent } from './components/ant-radio/ant-radio.component';
import { AntCollapseComponent } from './components/ant-collapse/ant-collapse.component';
import { AntSwitchComponent } from './components/ant-switch/ant-switch.component';
import { AntSelectComponent } from './components/ant-select/ant-select.component';
import { AntAutocompleteComponent } from './components/ant-autocomplete/ant-autocomplete.component';
import { AntProgressComponent } from './components/ant-progress/ant-progress.component';
import { AntSliderComponent } from './components/ant-slider/ant-slider.component';
import { AntDateTimePickerComponent } from './components/ant-datepicker/ant-date-time-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AntButtonComponent,
    AntInputComponent,
    AntTextareaComponent,
    AntCheckboxComponent,
    AntRadioComponent,
    AntCollapseComponent,
    AntSwitchComponent,
    AntSelectComponent,
    AntAutocompleteComponent,
    AntProgressComponent,
    AntSliderComponent,
    AntDateTimePickerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-antd';
}
