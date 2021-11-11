import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserSchema } from 'fum-models/lib';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { buildData } from 'src/app/helpers/buildForm';
import { OrganizationService } from 'src/app/services/organization.service';
import { SchemasService } from 'src/app/services/schemas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  organization: any;
  sub = new Subscription();
  organizationSchema$?: Observable<UserSchema>;
  form: FormGroup | undefined;

  constructor(
    private route: ActivatedRoute,
    private schema: SchemasService,
    private organizationService: OrganizationService
  ) {
    this.route.url.subscribe((urlS) => {
      if (urlS[1]?.path === 'edit')
        this.route.paramMap.subscribe((params) => {
          this.organizationService
            .getOrganization(params.get('orgId') ?? '')
            .subscribe((organization) => {
              this.organization = organization;
              this.buildForms();
            });
        });
      this.buildForms();
    });
  }

  buildForms() {
    this.organizationSchema$ = this.schema.schema.pipe(
      map((schema) => schema.organization)
    );
    this.sub.add(
      this.organizationSchema$
        .pipe(
          tap((fields) => {
            this.form = buildData(fields, this.organization);
            console.log(fields, this.form);
          })
        )
        .subscribe()
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
