import { Component, Input } from '@angular/core';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ant-progress',
  templateUrl: './ant-progress.component.html',
  styleUrls: ['./ant-progress.component.css'],
  standalone: true,
  imports: [NzProgressModule, CommonModule],
})
export class AntProgressComponent {
  @Input() type: 'line' | 'circle' = 'line'; // Type of progress indicator
  @Input() percent: number = 40; // Progress percentage
  @Input() strokeWidth: number = 8; // Stroke width for circular progress
  @Input() showInfo: boolean = true; // Show info text for line progress
  @Input() gapDegree: number = 0; // Gap degree for circular progress
  @Input() showInfoCircle: boolean = true; // Show info text for circular progress
  @Input() status: 'success' | 'exception' | 'active' | 'normal' = 'normal'; // Progress status
  @Input() strokeColor: string = ''; // Stroke color for circular progress

  format(percent: number): string {
    return `${percent}%`;
  }
}
