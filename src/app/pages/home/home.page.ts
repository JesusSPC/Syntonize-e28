import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PunkService } from 'src/app/services';
import { Pagination } from 'src/app/models/Pagination';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  pagination: Pagination;
  beers$: Observable<any>;
  currentBeers$: Observable<any>;
  beersListPage = 1;
  beersListLimit = 5;

  constructor(private punkService: PunkService) {
    this.pagination = new Pagination(this.beersListLimit, [], 1);
  }

  ngOnInit(): void {
    this.beers$ = this.punkService.getAllBeers(this.beersListPage, 80);
    this.currentBeers$ = this.pagination.setCurrentListItems(this.beers$, this.pagination.currentPage);
    this.pagination.setPagesLength(this.beers$, this.beersListLimit);
  }

  setBeersList(listNumber, beers) {
    return beers.filter((beer: any, i: number) =>
      i < (listNumber * this.beersListLimit) && i >= ((listNumber * this.beersListLimit) - this.beersListLimit));
  }
}
