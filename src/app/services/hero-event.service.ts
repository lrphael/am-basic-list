import { EventEmitter, Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroEventService {

  public confirmForm: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  public searchHeroWord: EventEmitter<string> = new EventEmitter<string>();

  private heroData: Hero;

  constructor() { }

  public searchHero(word: string): void {
    this.searchHeroWord.emit(word);
  }

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
