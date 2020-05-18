import { Component, Output, EventEmitter, Input, ContentChildren, AfterContentInit } from '@angular/core';

@Component({
  selector: 'e-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterContentInit {
  @Input() listPage: number;
  @Input() listLimit: number;
  @Output() changeList = new EventEmitter<number>();
  @ContentChildren('listItem') listItems;

  ngAfterContentInit() {
    console.log(this.listItems);
  }

  previousPage() {
    if (this.listPage === 1) { return; }
    this.listPage--;
    this.changeList.emit(this.listPage);
  }

  nextPage() {
    if (this.listItems.length < this.listLimit) { return; }
    this.listPage++;
    this.changeList.emit(this.listPage);
  }
}
