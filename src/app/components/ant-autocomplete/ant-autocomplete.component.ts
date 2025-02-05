import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ant-autocomplete',
  templateUrl: './ant-autocomplete.component.html',
  styleUrls: ['./ant-autocomplete.component.css'],
  standalone: true,
  imports: [NzAutocompleteModule, NzInputModule, CommonModule, FormsModule],
})
export class AntAutocompleteComponent {
  constructor() {
    this.filteredOptions = this.options;
  }

  ngOnChanges(): void {
    this.filteredOptions = this.options;
  }
  inputValue?: string;
  @Input() placeholder: string = 'Search here';
  filteredOptions: string[] = [];
  options = ['Option 1', 'Option 2', 'Option 3'];
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onChange(value: string): void {
    this.inputValue = value;
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    this.valueChange.emit(value);
  }
}
