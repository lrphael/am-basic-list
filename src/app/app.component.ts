import { Component } from '@angular/core';
import { HeroFormEventService } from './services/hero-form-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
