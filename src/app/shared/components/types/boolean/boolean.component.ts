import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BooleanComponent),
      multi: true,
    },
  ],
})
export class BooleanComponent implements OnInit {
  
  @Input() data?: string;
  @Input() name?: string | number;
  @Input() f: AbstractControl | null = new FormControl('');

  constructor() {}
  ngOnInit() {
  }

  public get formControl(): FormControl {
    return (this.f as FormControl) ?? new FormControl('');
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  writeValue() {}

  registerOnChange() {}
}
