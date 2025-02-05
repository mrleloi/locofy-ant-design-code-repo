import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ant-select',
  templateUrl: './ant-select.component.html',
  standalone: true,
  imports: [NzSelectModule, CommonModule, FormsModule],
})
export class AntSelectComponent {
  @Input() options: any[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ]; // Options for the select dropdown
  @Input() value: any; // Currently selected value
  @Input() placeholder: string = 'Select'; // Placeholder text
  @Input() disabled: boolean = false; // Disable the select input
  @Input() multiple: boolean = false; // Allow multiple selections
  @Input() singleValue: string = '1'; // Allow multiple selections
  @Input() multipleValue: string[] = ['1', '2']; // Allow multiple selections
  @Input() size: 'small' | 'default' | 'large' = 'default'; // Size of the select
  @Input() allowClear: boolean = true; // Show clear button
  @Input() className: string = '';

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  // Method to handle selection change
  onChange(value: any): void {
    this.change.emit(value);
  }
}
