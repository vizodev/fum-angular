import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { UserSchema } from 'fum-models/lib';
import { Subject } from 'rxjs';
import { RouterService } from 'src/app/core/router.service';
import { refreshDataTable } from 'src/app/helpers/datatables.helper';
import { SchemasService } from 'src/app/services/schemas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: any;
  isLoading: boolean = false;
  userSchema?: UserSchema;

  @ViewChild(DataTableDirective, { static: false })
  private dataTableElement!: DataTableDirective;

  dataTableOptions: DataTables.Settings | any = {
    responsive: true,
    aaSorting: [],
  };
  dataTableTrigger: Subject<void> = new Subject();

  constructor(
    private schema: SchemasService,
    private cd: ChangeDetectorRef,
    private userService: UserService,
    private router: RouterService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
    this.schema.schema.subscribe((data) => {
      this.userSchema = data.user;
      refreshDataTable(this.dataTableElement, this.dataTableTrigger);
      this.cd.detectChanges();
      this.isLoading = false;
    });
  }

  edit(uId: string) {
    this.router.editUser(uId);
  }
}
