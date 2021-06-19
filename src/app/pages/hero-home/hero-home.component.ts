import { Component } from '@angular/core';
import { HeroFormEventService } from '../../services/hero-form-event.service';

@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent {
  title = 'w2m-test';

  showForm = false;
  searchForm = false;

  constructor(
    public heroEvents: HeroFormEventService
  ) { }

  newHero(): void {
    this.showForm = true;
    this.heroEvents.sendFormConfirmation(true);
  }

  cancelHeroForm(): void {
    this.showForm = false;
  }

  searchHero(): void {
    this.showForm = false;
    this.searchForm = true;
  }

  cancelSearch(): void {
    this.searchForm = false;
  }

}
