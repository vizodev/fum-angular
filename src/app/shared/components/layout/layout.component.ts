import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, Subscription } from 'rxjs';
import { refreshDataTable } from 'src/app/helpers/datatables.helper';
import { initDropdown, toggleSidebar } from 'src/app/helpers/layout.helper';
import { SettingsService } from 'src/app/services/settings.service';
import { SidebarStyle } from 'src/app/types/enums/sideBarStyle';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  @ViewChild(DataTableDirective, {static : false}) private dataTableElement?: DataTableDirective;

  SidebarStyle = SidebarStyle;
  dataTableOptions:  any = {
    responsive: true,
    aaSorting: []
  };
  dataTableTrigger: Subject<void> = new Subject();
  isLoading?: boolean;

  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {
        if(this.dataTableElement)
        refreshDataTable(this.dataTableElement, this.dataTableTrigger)
        this.isLoading = false;

      }

  ngAfterViewInit() {
    initDropdown();
  }

  toggle() {
    toggleSidebar();
  }
  
  public get sidebarStyle() {
    return this.settingService.sidebarStyle;
  }
}
