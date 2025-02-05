import { Component, Input } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ant-accordion',
  templateUrl: './ant-collapse.component.html',
  standalone: true,
  imports: [NzCollapseModule, CommonModule],
})
export class AntCollapseComponent {
  @Input() header: string = 'Accordion Header';
  @Input() content: string = 'Accordion Content';
  @Input() isActive: boolean = false; // To control whether the panel is active or not
  @Input() isDisabled: boolean = false; // To control whether the panel is disabled
}
