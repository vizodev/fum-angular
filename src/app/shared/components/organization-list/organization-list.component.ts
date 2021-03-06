import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { OrganizationSchema } from 'fum-models/lib';
import { Subject } from 'rxjs';
import { RouterService } from 'src/app/core/router.service';
import { refreshDataTable } from 'src/app/helpers/datatables.helper';
import { OrganizationService } from 'src/app/services/organization.service';
import { SchemasService } from 'src/app/services/schemas.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
})
export class OrganizationListComponent implements OnInit, OnDestroy {
  organizations: any = [];
  isLoading: boolean = false;
  organizationSchema?: OrganizationSchema;
  @Output() selectOrganizations = new EventEmitter();
  @Input() selected: any;

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
    private organizationService: OrganizationService,
    private router: RouterService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.isLoading = true;
    this.organizationService
      .getOrganizations()
      .subscribe((organization) => (this.organizations = organization));
    this.schema.schema.subscribe((data) => {
      this.organizationSchema = data.organization;
      refreshDataTable(this.dataTableElement, this.dataTableTrigger);
      this.cd.detectChanges();
      this.selected?.forEach((org) => {
        var element = <HTMLInputElement>document.getElementById(`${org}`);
        element.checked = true;
      });
      this.isLoading = false;
    });
  }

  edit(orgId: string) {
    this.router.editOrganization(orgId);
  }

  onSelectOrganization(org: any, state: boolean) {
    console.log(state);

    if (state) {
      this.selected = this.selected ?? [];
      this.selected.push(org.id);
    } else
      this.selected.splice(
        this.selected.findIndex((organization) => organization === org.id),
        1
      );
    this.selectOrganizations.emit(this.selected);
  }

  isSelected(org: any) {
    return !!this.selected?.find((organization) => organization === org.id);
  }
}
