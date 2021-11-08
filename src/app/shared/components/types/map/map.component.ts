import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MyMap } from 'fum-models/lib';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MapComponent),
      multi: true,
    },
  ],
})
export class MapComponent implements OnInit {
  @Input() schema: MyMap = {
    id: 'map',
    values: {
      favoriteColors: { id: 'string' },
    },
  };
  @Input() data: any[] = [];
  @Input() f?: AbstractControl | null;

  constructor() {}

  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit() {}

  writeValue() {}

  registerOnChange() {}
}
