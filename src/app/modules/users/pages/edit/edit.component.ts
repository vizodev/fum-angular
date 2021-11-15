import { Component, OnDestroy, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserSchema } from 'fum-models/lib';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RouterService } from 'src/app/core/router.service';
import { buildData } from 'src/app/helpers/buildForm';
import { SchemasService } from 'src/app/services/schemas.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  isLoading: boolean = false;
  users: any;
  sub = new Subscription();
  usersSchema$?: Observable<UserSchema>;
  usersSchema?: UserSchema;
  form: FormGroup | undefined;
  form1: FormGroup | undefined;
  form2: FormGroup | undefined;
  saveLoading: boolean = false;
  statusPage?: 'edit' | 'new';
  selectOrganizations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private schema: SchemasService,
    private userService: UserService,
    private router: RouterService
  ) {
    this.isLoading = true;
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

    this.schema.schema
      .pipe(tap((schema) => (this.usersSchema = schema.user)))
      .subscribe();

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
              (f) => f.key === 'organizationsIds' || f.key === 'teamsIds'
            )
          )
        )
        .pipe(
          tap((fields) => {
            this.form1 = buildData(fields, this.users);
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
                f.key !== 'organizationsIds' &&
                f.key !== 'teamsIds' &&
                f.key !== 'roles' &&
                f.key !== 'permissions'
            )
          )
        )
        .pipe(
          tap((fields) => {
            this.form = buildData(fields, this.users);
          })
        )
        .subscribe()
    );
    this.isLoading = false;

  }

  ngOnInit(): void {}

  async save() {
    console.log(this.users);

    this.saveLoading = true;
    // if (!this.form?.valid || !this.form1?.valid || !this.form2?.valid)
    //   this.saveLoading = false;
    // else {
    this.users = this.users ?? {};
    this.usersSchema?.forEach((field) => {
      field.key !== 'organizationsIds' && field.key !== 'teamsIds'
        ? (this.users[field.key] =
            this.form?.get(field.key)?.value ??
            this.form1?.get(field.key)?.value ??
            this.form2?.get(field.key)?.value ??
            null)
        : null;
    });
    console.log(this.users);
    await (this.statusPage == 'edit'
      ? this.userService.updateUser(this.users)
      : this.userService.addUser(this.users));
    this.saveLoading = false;
    this.router.users();
  }
  // }

  addOrganizations() {
    console.log(this.users);
    // this.selectOrganizations.forEach((org) => {
    //   (this.form1?.get('organizationsIds') as FormArray).controls.push(
    //     new FormControl(org.id)
    //   );
    //   this.users.organizationsIds.push(org.id);
    // });
    // console.log(this.users);
  }

  cancelSelectOrganizations() {}

  addTeams() {
    // console.log(this.users);
    // this.selectTeams.forEach((team) => {
    //   (this.form1?.get('teamsIds') as FormArray).controls.push(
    //     new FormControl(team.id)
    //   );
    //   this.users.teamsIds.push(team.id);
    // });

    console.log(this.users);
  }

  cancelSelectTeams() {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
