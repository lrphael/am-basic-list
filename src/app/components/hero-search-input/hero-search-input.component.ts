import { Component } from '@angular/core';
import { HeroEventService } from 'src/app/services/hero-event.service';

@Component({
  selector: 'hero-search-input',
  templateUrl: './hero-search-input.component.html',
  styleUrls: ['./hero-search-input.component.scss']
})
export class HeroSearchInputComponent {

  constructor(
    private heroEvent: HeroEventService
  ) { }

  searchWord(word) {
    this.heroEvent.searchHero(word);
  }

}
