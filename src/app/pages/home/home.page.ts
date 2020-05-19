import { Component, OnInit, ElementRef } from '@angular/core';
import { PunkService } from 'src/app/services';
import { Observable, merge, concat } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  beers$: Observable<any>;
  beersPagination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  beersListPage = 1;
  beersListLimit = 5;
  allBeers = [];

  constructor(private punkService: PunkService) { }

  ngOnInit(): void {
    const request$ = this.punkService.getAllBeers(this.beersListPage, 80);
    this.beers$ = concat(...request$);
  }

  ngAfterViewInit() {
    // this.beers$.subscribe(observer => console.log(observer));
  }

  setBeersList(listNumber: number) {
    this.beersListPage = listNumber;
    this.beers$ = this.punkService.getBeers(this.beersListPage, this.beersListLimit);
  }

  ngOnDestroy() {

  }
}
