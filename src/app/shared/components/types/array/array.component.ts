import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MyArray } from 'fum-models/lib';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => ArrayComponent),
  //     multi: true,
  //   },
  // ],
})

export class ArrayComponent implements OnInit {

  @Input() schema: MyArray = { id: 'array', values: { id: 'string' } };
  @Input() data: any[] = [];
  @Input() f?: AbstractControl | null;

  constructor() {}

  ngOnInit() {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}

  writeValue() {}

  registerOnChange() {}
}
