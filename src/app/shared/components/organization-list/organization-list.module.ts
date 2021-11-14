import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationListComponent } from './organization-list.component';
import { DataTablesModule } from 'angular-datatables';
import { LoadingIndicatorModule } from 'src/app/shared/components/loading-indicator/loading-indicator.module';

@NgModule({
  declarations: [OrganizationListComponent],
  imports: [CommonModule, LoadingIndicatorModule, DataTablesModule],
  exports: [OrganizationListComponent],
})
export class OrganizationListModule {}
