import { Component, OnInit } from '@angular/core';
import { PunkService } from 'src/app/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  beers$: Observable<any>;
  currentBeers$: Observable<any>;
  beersPagination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  beersListPage = 1;
  beersListLimit = 5;

  constructor(private punkService: PunkService) { }

  ngOnInit(): void {
    this.beers$ = this.punkService.getAllBeers(this.beersListPage, 80);
    this.changeList(1);
  }

  changeList(listNumber) {
    this.currentBeers$ = this.beers$.pipe(
      map((entry: any[]) =>
        this.setBeersList(listNumber, entry)
    ));
  }

  setBeersList(listNumber, beers) {
    return beers.filter((beer: any, i: number) =>
      i < (listNumber * this.beersListLimit) && i >= ((listNumber * this.beersListLimit) - this.beersListLimit));
  }
}
