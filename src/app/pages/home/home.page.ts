import { Component, OnInit } from '@angular/core';
import { PunkService } from 'src/app/services';
import { Observable, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

class Pagination {
  public currentPage: BehaviorSubject<number>;
  sub: Subscription;

  constructor(public perPage: number, public totalPages: number[], currentPage) {
    this.currentPage = new BehaviorSubject(currentPage);
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

  // setPagesLength(data: Observable<any>, listLimit: number) {
  //   this.sub = data.pipe(
  //     map(items => {
  //       console.log(':(');
  //       const dataLength = items.length;
  //       const pages = Math.ceil(dataLength / listLimit);
  //       this.totalPages = Array.from(Array(pages), (x, idx) => idx + 1);
  //     }));
  // }

  changePage(page) {
    this.currentPage.next(page);
  }
}

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pagination: Pagination;
  beers$: Observable<any>;
  currentBeers$: Observable<any>;
  // beersPagination: number[] = [];
  beersListPage = 1;
  beersListLimit = 5;

  constructor(private punkService: PunkService) {
    this.pagination = new Pagination(this.beersListLimit, [], 1);
  }

  ngOnInit(): void {
    this.beers$ = this.punkService.getAllBeers(this.beersListPage, 80);
    this.currentBeers$ = this.setCurrentBeers();
    this.pagination.setPagesLength(this.beers$, this.beersListLimit);
    // this.changeList(1);
  }

  setCurrentBeers() {
    return combineLatest(
      this.beers$,
      this.pagination.currentPage,
      (beers, currentPage) =>
        beers.filter(
          (_, i) => this.pagination.filterListItems(i, currentPage)
        )
      );
  }

  // changeList(listNumber) {
  //   this.currentBeers$ = this.beers$.pipe(
  //     map((entry: any[]) =>
  //       this.setBeersList(listNumber, entry)
  //   ));
  // }

  setBeersList(listNumber, beers) {
    return beers.filter((beer: any, i: number) =>
      i < (listNumber * this.beersListLimit) && i >= ((listNumber * this.beersListLimit) - this.beersListLimit));
  }
}
