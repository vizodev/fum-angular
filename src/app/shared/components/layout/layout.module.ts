import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent,FooterComponent],
  imports: [CommonModule],
  exports:[LayoutComponent]
})
export class LayoutModule {}
