import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayComponent } from './array/array.component';
import { BooleanComponent } from './boolean/boolean.component';
import { StringComponent } from './string/string.component';
import { NumberComponent } from './number/number.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArrayComponent,
    BooleanComponent,
    StringComponent,
    NumberComponent,
    MapComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ArrayComponent,
    BooleanComponent,
    StringComponent,
    NumberComponent,
    MapComponent,
  ],
})
export class TypesModule {}
