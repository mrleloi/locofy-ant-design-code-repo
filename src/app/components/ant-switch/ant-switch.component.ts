import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ant-switch',
  templateUrl: './ant-switch.component.html',
  standalone: true,
  imports: [NzSwitchModule, CommonModule],
})
export class AntSwitchComponent {
  @Input() checked: boolean = false; // Default state of the switch
  @Input() disabled: boolean = false; // Disable the switch
  @Input() size: 'small' | 'default' = 'default'; // Size of the switch
  @Input() checkedText: string = 'On'; // Text for the checked state
  @Input() unCheckedText: string = 'Off'; // Text for the unchecked state

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Method to handle switch changes
  onChange(checked: any): void {
    this.change.emit(checked);
  }
}
