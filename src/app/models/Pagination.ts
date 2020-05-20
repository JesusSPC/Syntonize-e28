import { BehaviorSubject, Subscription, Observable, combineLatest } from 'rxjs';
import { first } from 'rxjs/operators';

export class Pagination {
  public currentPage: BehaviorSubject<number>;
  sub: Subscription;

  constructor(public perPage: number, public totalPages: number[], currentPage) {
    this.currentPage = new BehaviorSubject(currentPage);
  }

  setCurrentListItems(data: Observable<any>, currentPage: BehaviorSubject<number>) {
    return combineLatest(
      data,
      currentPage,
      (dataItems, currentP) =>
        dataItems.filter(
          (_, i) => this.filterListItems(i, currentP)
        )
      );
  }

  filterListItems(index, currentPage) {
    const current = this.perPage * currentPage;
    const prev = this.perPage * (currentPage - 1);
    return prev <= index && current > index;
  }

  setPagesLength(data: Observable<any>, listLimit: number) {
    this.sub = data.pipe(first()).
      subscribe(items => {
        const dataLength = items.length;
        const pages = Math.ceil(dataLength / listLimit);
        this.totalPages = Array.from(Array(pages), (x, idx) => idx + 1);
      });
  }

  changePage(page) {
    this.currentPage.next(page);
  }
}
