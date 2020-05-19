import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PunkService {
  url = 'https://api.punkapi.com/v2/';
  constructor(private http: HttpClient) {}

  getAllBeers(listNumber, listLimit) {
    const allBeers: Observable<{}>[] = [];
    const endLoop = 3;
    for (let i = listNumber; i < endLoop; i++) {
      const request$ = this.http.get(`${this.url}beers?page=${i}&per_page=${listLimit}`);
      allBeers.push(request$);
    }
    return allBeers;
  }

  getBeers(listNumber: number, listLimit: number) {
    return this.http.get(`${this.url}beers?page=${listNumber}&per_page=${listLimit}`);
  }
}
