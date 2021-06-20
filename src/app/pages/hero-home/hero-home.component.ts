import { Component } from '@angular/core';
import { HeroEventService } from '../../services/hero-event.service';

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
    public heroEvent: HeroEventService
  ) { }

  newHero(): void {
    this.showForm = true;
    this.heroEvent.sendFormConfirmation(true);
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
