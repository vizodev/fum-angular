import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { TeamSchema } from 'fum-models/lib';
import { Subject } from 'rxjs';
import { RouterService } from 'src/app/core/router.service';
import { refreshDataTable } from 'src/app/helpers/datatables.helper';
import { SchemasService } from 'src/app/services/schemas.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  teams: any;
  isLoading: boolean = false;
  teamSchema?: TeamSchema;

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
    private teamService: TeamService,
    private router: RouterService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.isLoading = true;
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
    this.schema.schema.subscribe((data) => {
      this.teamSchema = data.user;
      refreshDataTable(this.dataTableElement, this.dataTableTrigger);
      this.cd.detectChanges();
      this.isLoading = false;
    });
  }

  edit(teamId: string) {
    this.router.editTeam(teamId);
  }
}
