import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'ant-radio',
  templateUrl: './ant-radio.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, NzRadioModule],
  styleUrls: ['./ant-radio.component.css'],
})
export class AntRadioComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() labelPosition: 'left' | 'right' = 'right'; // Label position: left or right
  @Input() value: any;
  @Input() name: string = '';
  @Input() className: string = '';

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCheckedChange(checked: boolean): void {
    this.checkedChange.emit(checked);
  }
}
