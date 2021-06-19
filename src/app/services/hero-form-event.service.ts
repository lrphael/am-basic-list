import { EventEmitter, Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroFormEventService {

  public confirmForm: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  // public heroData: EventEmitter<Hero> = new EventEmitter<Hero>();

  private heroData: Hero;

  constructor() { }

  public sendFormConfirmation(confirm: boolean): void {
    this.confirmForm.emit(confirm);
  }

  public cleanHeroData(): void {
    this.heroData = undefined;
  }

  public setHeroData(hero: Hero): void {
    this.heroData = hero;
  }

  public getHeroData(): Hero {
    return this.heroData;
  }

}
