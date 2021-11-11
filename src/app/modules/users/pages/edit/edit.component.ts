import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserSchema } from 'fum-models/lib';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { buildData } from 'src/app/helpers/buildForm';
import { SchemasService } from 'src/app/services/schemas.service';
import { UserService } from 'src/app/services/user.service';
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
  saveLoading: boolean = false;
  statusPage?: 'edit' | 'new';
  constructor(
    private route: ActivatedRoute,
    private schema: SchemasService,
    private userService: UserService
  ) {
    this.route.url.subscribe((urlS) => {
      if (urlS[1]?.path === 'edit') {
        this.statusPage = 'edit';
        this.route.paramMap.subscribe((params) => {
          this.userService
            .getUser(params.get('uid') ?? '')
            .subscribe((user) => {
              this.users = user;
              this.buildForms();
            });
        });
      } else {
        this.statusPage = 'new';
        this.buildForms();
      }
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
            console.log(this.form2);
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
        .pipe(
          tap((fields) => {
            this.form1 = buildData(fields, this.users);
            console.log(this.form1);
          })
        )
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
            console.log(this.form);
          })
        )
        .subscribe()
    );
  }

  ngOnInit(): void {}

  async save() {
    this.saveLoading = true;
    if (!this.form?.valid || !this.form1?.valid || !this.form2?.valid)
      this.saveLoading = false;
    else {
      try {
        (await this.statusPage) == 'edit'
          ? this.userService.updateUser(this.users)
          : this.userService.addUser(this.users);
        this.saveLoading = false;
      } catch (error) {
        this.saveLoading = false;
      }
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
