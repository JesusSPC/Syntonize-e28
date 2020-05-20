import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'e-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listPagination: number[];
  // @Input() listPage: number;
  // @Input() listLimit: number;
  @Output() changeList = new EventEmitter<number>();
}
