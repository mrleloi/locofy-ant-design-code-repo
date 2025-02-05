import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import zh from '@angular/common/locales/zh';
import { NzI18nService, en_US } from 'ng-zorro-antd/i18n';
registerLocaleData(zh);

@Component({
  selector: 'ant-date-time-picker',
  templateUrl: './ant-date-time-picker.component.html',
  styleUrls: ['./ant-date-time-picker.component.css'],
  standalone: true,
  imports: [NzDatePickerModule, CommonModule, FormsModule],
})
export class AntDateTimePickerComponent implements OnInit {
  @Input() placeholder: string = 'Select date';
  @Input() mode: 'date' | 'date-time' = 'date'; // Option to choose date, time, or both
  @Input() disabled: boolean = false;
  constructor(private i18n: NzI18nService) {}

  ngOnInit(): void {
    this.setLanguageToEnglish();
  }

  setLanguageToEnglish(): void {
    this.i18n.setLocale(en_US); // Set Ant Design locale to English
  }

  getPickerMode(): string {
    if (this.mode === 'date') {
      return 'date';
    }
    return 'date-time';
  }
}
