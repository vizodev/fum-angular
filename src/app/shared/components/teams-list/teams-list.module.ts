import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './teams-list.component';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [TeamsListComponent],
  imports: [CommonModule, LoadingIndicatorModule, DataTablesModule],
  exports: [TeamsListComponent],

})
export class TeamsListModule { }
