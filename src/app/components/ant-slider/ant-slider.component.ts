import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ant-slider',
  templateUrl: './ant-slider.component.html',
  styleUrls: ['./ant-slider.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NzSliderModule, CommonModule, FormsModule],
})
export class AntSliderComponent {
  @Input() min: number = 0; // Minimum value
  @Input() max: number = 100; // Maximum value
  @Input() step: number = 1; // Step size
  @Input() value: number | [number, number] = 0; // Single or range value
  @Input() className: string = ''; // Custom class for styling
  @Input() range: boolean = false; // Whether the slider is a range slider
  @Input() disabled: boolean = false; // Disable the slider
  @Input() vertical: boolean = false; // Vertical slider
  @Input() tooltipVisible: 'default' | 'always' | 'never' = 'default'; // Tooltip visibility
  @Input() tooltipPlacement: 'top' | 'bottom' | 'left' | 'right' = 'top'; // Tooltip placement
  @Output() valueChange: EventEmitter<number | [number, number]> =
    new EventEmitter<number | [number, number]>();

  @HostBinding('style.display') display = 'contents';
  onValueChange(value: number | [number, number]): void {
    this.valueChange.emit(value);
  }
}
