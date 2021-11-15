import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { TeamSchema } from 'fum-models/lib';
import { Subject } from 'rxjs';
import { RouterService } from 'src/app/core/router.service';
import { refreshDataTable } from 'src/app/helpers/datatables.helper';
import { SchemasService } from 'src/app/services/schemas.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
})
export class TeamsListComponent implements OnInit {
  teams: any;
  isLoading: boolean = false;
  teamSchema?: TeamSchema;
  @Output() selectTeams = new EventEmitter();
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
    private teamService: TeamService,
    private router: RouterService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.isLoading = true;
    this.teamService.getTeams().subscribe((teams) => (this.teams = teams));
    this.schema.schema.subscribe((data) => {
      this.teamSchema = data.team;
      refreshDataTable(this.dataTableElement, this.dataTableTrigger);
      this.cd.detectChanges();
      this.selected?.forEach((team) => {
        var element = <HTMLInputElement>document.getElementById(`${team}`);
        element.checked = true;
      });
      this.isLoading = false;
    });
  }

  edit(teamId: string) {
    this.router.editTeam(teamId);
  }

  new() {
    this.router.addTeam();
  }

  onSelectTeam(team: any, state: boolean) {
    console.log(state);

    if (state) this.selected.push(team.id);
    else
      this.selected.splice(
        this.selected.findIndex((team) => team === team.id),
        1
      );
    this.selectTeams.emit(this.selected);
  }

  isSelected(team: any) {
    return !!this.selected.find((teamId) => teamId === team.id);
  }
}
