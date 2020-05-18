import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PunkService {
  url = 'https://api.punkapi.com/v2/';
  constructor(private http: HttpClient) {}

  getBeers(listNumber: number, listLimit: number) {
    return this.http.get(`${this.url}beers?page=${listNumber}&per_page=${listLimit}`);
  }
}
