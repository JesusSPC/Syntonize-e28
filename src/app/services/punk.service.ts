import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PunkService {
  url = 'https://api.punkapi.com/v2/';
  constructor(private http: HttpClient) {}

  getAllBeers(listNumber, listLimit) {
    return this.http.get(`${this.url}beers?page=${listNumber}&per_page=${listLimit}`);
  }
}
