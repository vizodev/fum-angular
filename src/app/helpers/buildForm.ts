import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyArray, MyMap, Schema } from 'fum-models/lib';

export function buildData(schema: Schema, entity: any) {
  // console.log(schema, entity);
  if (schema) {
    var formGroup = new FormGroup({});
    for (const field of schema) {
      {
        if (field.type.id === 'array')
          formGroup.addControl(
            field.key,
            array(
              field.type,
              entity ? entity[field.key] : undefined,
              field.required ?? false
            )
          );
        else if (field.type.id === 'map')
          formGroup.addControl(
            field.key,
            map(
              field.type,
              entity ? entity[field.key] : undefined,
              field.required ?? false
            )
          );
        else
          formGroup.addControl(
            field.key,
            buildControl(
              entity ? entity[field.key] : undefined,
              field.required ?? false
            )
          );
      }
    }

    return formGroup;
  }
  return undefined;
}

function array(schema: MyArray, data: any[] | undefined, required: boolean) {
  var formArray = new FormArray([], required ? Validators.required : null);
  if (data)
    for (const field of data) {
      if (schema.values.id === 'map') {
        formArray.controls.push(map(schema.values, field, required));
      } else formArray.controls.push(buildControl(field, required));
    }
  else {
    if (schema.values.id === 'map')
      formArray.controls.push(map(schema.values, undefined, required));
    else formArray.controls.push(buildControl(undefined, required));
  }

  return formArray;
}

function map(schema: MyMap, data: any, required: boolean) {
  var formGroup = new FormGroup({});
  for (const [key, value] of Object.entries(schema.values)) {
    if (value.id == 'array')
      formGroup.addControl(
        key,
        array(value, data ? data[key] : undefined, required)
      );
    else if (value.id === 'map')
      formGroup.addControl(
        key,
        map(value, data ? data[key] : undefined, required)
      );
    else
      formGroup.addControl(
        key,
        buildControl(data ? data[key] : undefined, required)
      );
  }
  return formGroup;
}

function buildControl(data: any | undefined, required: boolean) {
  return data ? new FormControl(data,{ validators: Validators.required}) : new FormControl(null, {
    validators: Validators.required,
 });
}
