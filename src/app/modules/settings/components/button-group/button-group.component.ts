import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SidebarStyle } from 'src/app/types/enums/sideBarStyle';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css'],
})
export class ButtonGroupComponent implements OnInit {
  @Input() value: SidebarStyle = SidebarStyle.expanded;
  @Input() options?: SidebarStyle[];
  @Input() values: SidebarStyle[] = [];
  SidebarStyle = SidebarStyle;
  @Output() valueChange: EventEmitter<SidebarStyle> =
    new EventEmitter<SidebarStyle>();

  constructor() {
    console.log(this.value);
  }

  ngOnInit() {}

  isActive(index: number) {
    return SidebarStyle[this.value] === SidebarStyle[index];
  }

  getValue(option: SidebarStyle, index: number): SidebarStyle {
    return this.values && this.values[index] ? this.values[index] : option;
  }

  setValue(option: SidebarStyle, index: number) {
    const value = this.getValue(option, index);
    this.value = value;
    this.valueChange.emit(value);
  }
}
