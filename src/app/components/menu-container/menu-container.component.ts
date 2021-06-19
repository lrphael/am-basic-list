import { Component, OnInit } from '@angular/core';
import { HeroFormEventService } from '../../services/hero-form-event.service';

@Component({
  selector: 'menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent {

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
