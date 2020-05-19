import { Component, Output, EventEmitter, Input, ContentChildren } from '@angular/core';

@Component({
  selector: 'e-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() listPagination: number[];
  @Input() listPage: number;
  @Input() listLimit: number;
  @Output() changeList = new EventEmitter<number>();
  // @ContentChildren('listItem') listItems;

  // previousPage() {
  //   if (this.listPage === 1) { return; }
  //   this.listPage--;
  //   this.changeList.emit(this.listPage);
  // }

  // nextPage() {
  //   if (this.listItems.length < this.listLimit) { return; }
  //   this.listPage++;
  //   this.changeList.emit(this.listPage);
  // }
}
