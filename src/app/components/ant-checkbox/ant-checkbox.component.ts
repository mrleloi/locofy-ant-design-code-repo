import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'ant-checkbox',
  templateUrl: './ant-checkbox.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, NzCheckboxModule],
  styleUrls: ['./ant-checkbox.component.css'],
})
export class AntCheckboxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'left'; // Label position: left or right
  @Input() className: string = '';

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckedChange(checked: boolean): void {
    this.checkedChange.emit(checked);
  }
}
