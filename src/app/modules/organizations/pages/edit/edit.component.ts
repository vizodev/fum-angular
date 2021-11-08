import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MyArray,
  MyMap,
  OrganizationSchema,
  Schema,
  SchemaField,
  UserSchema,
} from 'fum-models/lib';
import { Subscription } from 'rxjs';
import { buildData } from 'src/app/helpers/buildForm';
import { OrganizationService } from 'src/app/services/organization.service';
import { SchemasService } from 'src/app/services/schemas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  organization: any;
  sub = new Subscription();
  organizationSchema!: UserSchema;
  form: FormGroup | undefined;
  form1: FormGroup | undefined;
  form2: FormGroup | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private schema: SchemasService,
    private organizationService: OrganizationService
  ) {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('orgId'));
      this.organizationService
        .getUser(params.get('orgId') ?? '')
        .subscribe((organization) => {
          this.organization = organization;
          this.schema.schema.subscribe((data) => {
            this.organizationSchema = data.user;
            // this.form1 = this.buildForm1(
            //   this.organizationSchema,
            //   this.organization
            // );
            console.log(this.form);
          });
        });
    });
  }
 
  ngOnInit(): void {}
}
