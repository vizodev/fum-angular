import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => StringComponent),
  //     multi: true
  //   },
  // ],
})
export class StringComponent implements OnInit {
  @Input() data?: string;
  @Input() name?: string | number;
  @Input() f: AbstractControl | null = new FormControl('');

  constructor() {}
  ngOnInit() {}

  public get formControl(): FormControl {
    return (this.f as FormControl) ?? new FormControl('');  }

  registerOnTouched(fn: any): void {
    console.log('write');
  }

  setDisabledState?(isDisabled: boolean): void {}

  writeValue() {
    console.log('write');
  }

  registerOnChange() {
    console.log('register');
  }
}
