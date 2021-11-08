import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true,
    },
  ],
})
export class NumberComponent implements OnInit {
  @Input() data?: number;
  @Input() name?: string | number;
  @Input() f: AbstractControl | null = new FormControl('');

  constructor() {}
  ngOnInit() {}
  
  public get formControl() : FormControl {
    return this.f as FormControl ?? new FormControl('');
  }
  
  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  writeValue() {}

  registerOnChange() {}
}
