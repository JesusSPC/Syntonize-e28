import { Component, OnInit, ElementRef } from '@angular/core';
import { PunkService } from 'src/app/services';
import { Observable } from 'rxjs';

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

  constructor(private punkService: PunkService) { }

  ngOnInit(): void {
    this.beers$ = this.punkService.getBeers(this.beersListPage, this.beersListLimit);
  }

  setBeersList(listNumber: number) {
    this.beersListPage = listNumber;
    this.beers$ = this.punkService.getBeers(this.beersListPage, this.beersListLimit);
  }
}
