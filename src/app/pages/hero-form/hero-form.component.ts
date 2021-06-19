import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroFormEventService } from 'src/app/services/hero-form-event.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  heroData: Hero;

  constructor(
    private heroEvents: HeroFormEventService
  ) { }

  ngOnInit(): void {
    this.heroData = this.heroEvents.getHeroData();
  }

}
