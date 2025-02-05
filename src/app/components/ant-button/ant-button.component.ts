import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'ant-button',
  templateUrl: './ant-button.component.html',
  standalone: true,
  imports: [NzButtonModule, NzIconModule, CommonModule],
  styleUrls: ['./ant-button.component.css'],
})
export class AntButtonComponent {
  @Input() type: 'primary' | 'dashed' | 'link' | 'text' | 'default' = 'default';
  @Input() label: string = 'label';
  @Input() iconName: string = ''; // For icon buttons
  @Input() iconPosition: 'none' | 'left' | 'right' = 'none';
  @Input() disabled: boolean = false; // Disable the button
  @Input() ariaLabel: string = ''; // ARIA label for accessibility
  @Input() className: string = '';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick(event: Event): void {
    event.preventDefault(); // Prevent default behavior if necessary (e.g., for links)
    this.click.emit();
  }
}
