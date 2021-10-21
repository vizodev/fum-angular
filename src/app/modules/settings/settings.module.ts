import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { LayoutModule } from 'src/app/shared/components/layout/layout.module';
import { ButtonGroupComponent } from './components/button-group/button-group.component';

@NgModule({
  declarations: [SettingsComponent, ButtonGroupComponent],
  imports: [CommonModule, SettingsRoutingModule, LayoutModule],
})
export class SettingsModule {}
