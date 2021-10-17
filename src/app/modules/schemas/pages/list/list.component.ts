import { Component, OnInit } from '@angular/core';
import { SchemasService } from 'src/app/services/schemas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private schemaService: SchemasService) {}

  ngOnInit(): void {}
}
