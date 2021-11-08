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
export class EditComponent implements OnInit {
  users: any;
  sub = new Subscription();
  usersSchema$?: Observable<UserSchema>;
  form: FormGroup | undefined;
  form1: FormGroup | undefined;
  form2: FormGroup | undefined;

  constructor(
    private route: ActivatedRoute,
    private schema: SchemasService,
    private organizationService: OrganizationService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.organizationService
        .getUser(params.get('uId') ?? '')
        .subscribe((user) => {
          this.users = user;
          this.buildForms();
        });
    });
  }

  buildForms() {
    this.usersSchema$ = this.schema.schema.pipe(map((schema) => schema.user));
    this.sub.add(
      this.usersSchema$
        .pipe(
          map((userS) =>
            userS.filter((f) => f.key === 'roles' || f.key === 'permissions')
          )
        )
        .pipe(
          tap((fields) => {
            this.form2 = buildData(fields, this.users);
          })
        )
        .subscribe()
    );

    this.sub.add(
      this.usersSchema$
        .pipe(
          map((userS) =>
            userS.filter(
              (f) => (f) => f.key === 'organizations' || f.key === 'teams'
            )
          )
        )
        .pipe(tap((fields) => (this.form1 = buildData(fields, this.users))))
        .subscribe()
    );
    this.sub.add(
      this.usersSchema$
        .pipe(
          map((userS) =>
            userS.filter(
              (f) =>
                f.key !== 'organizations' &&
                f.key !== 'teams' &&
                f.key !== 'roles' &&
                f.key !== 'permissions'
            )
          )
        )
        .pipe(
          tap((fields) => {
            this.form = buildData(fields, this.users);
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
