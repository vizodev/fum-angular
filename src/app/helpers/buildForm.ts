import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyArray, MyMap, Schema } from 'fum-models/lib';

export function buildData(schema: Schema, entity: any) {
  if (schema) {
    var formGroup = new FormGroup({});
    for (const field of schema) {
      {
        if (field.type.id === 'array')
          formGroup.addControl(
            field.key,
            array(field.type, entity[field.key], field.required)
          );
        else if (field.type.id === 'map')
          formGroup.addControl(
            field.key,
            map(field.type, entity[field.key], field.required)
          );
        else formGroup.addControl(field.key, buildControl(entity[field.key]));
      }
    }
    return formGroup;
  }
  return undefined;
}

function array(schema: MyArray, data: any[], required: boolean | undefined) {
  var formArray = new FormArray([], required ? Validators.required : null);
  for (const field of data) {
    if (schema.values.id === 'map') {
      formArray.controls.push(map(schema.values, field, required));
    } else formArray.controls.push(buildControl(field));
  }
  return formArray;
}

function map(schema: MyMap, data: any, required: boolean | undefined) {
  var formGroup = new FormGroup({});
  for (const [key, value] of Object.entries(schema.values)) {
    if (value.id == 'array')
      formGroup.addControl(key, array(value, data[key], required));
    else if (value.id === 'map')
      formGroup.addControl(key, map(value, data[key], required));
    else formGroup.addControl(key, buildControl(data[key]));
  }
  return formGroup;
}

function buildControl(data: any) {
  return new FormControl(data);
}
