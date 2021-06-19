import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl = "http://localhost:8000/heroes";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.httpClient.get<any>(this.baseUrl + '/' + id);
  }

  create(hero: Hero) {
    return this.httpClient.post<any>(this.baseUrl, hero);
  }

  update(id: string, hero: Hero): Observable<Hero> {
    return this.httpClient.put<any>(this.baseUrl + '/' + id, hero);
  }

  delete(id: string) {
    return this.httpClient.delete<any>(this.baseUrl + '/' + id);
  }

}