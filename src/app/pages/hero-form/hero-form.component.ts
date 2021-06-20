import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroEventService } from 'src/app/services/hero-event.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  heroData: Hero;

  constructor(
    private heroEvent: HeroEventService
  ) { }

  ngOnInit(): void {
    this.heroData = this.heroEvent.getHeroData();
  }

}
