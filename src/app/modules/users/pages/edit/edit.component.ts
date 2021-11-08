import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  Types = ['number', 'string', 'boolean', 'array', 'map'];

  constructor() { }

  ngOnInit(): void {
  }

}
