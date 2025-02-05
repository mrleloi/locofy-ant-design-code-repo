import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'ant-input',
  templateUrl: './ant-input.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzIconModule],
  styleUrls: ['./ant-input.component.css'],
})
export class AntInputComponent {
  @Input() placeholder: string = ''; // Placeholder text
  @Input() value: string = ''; // Bound value
  @Input() iconNameLeft: string = ''; // Icon on the left
  @Input() iconNameRight: string = ''; // Icon on the right
  @Input() disabled: boolean = false; // Disable the input
  @Input() ariaLabel: string = ''; // ARIA label for accessibility
  @Input() hint: string = ''; // Hint text below the input
  @Input() className: string = ''; // Custom class for styling
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
