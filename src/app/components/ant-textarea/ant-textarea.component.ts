import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'ant-textarea',
  templateUrl: './ant-textarea.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, NzInputModule, NzIconModule],
  styleUrls: ['./ant-textarea.component.css'],
})
export class AntTextareaComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() rows: number = 3;
  @Input() hint: string = '';
  @Input() className: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
