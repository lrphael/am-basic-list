import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../services/hero.service";

import { Hero } from '../../models/hero';
import { HeroFormEventService } from 'src/app/services/hero-form-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  heroData = [];

  editForm = false

  constructor(
    private router: Router,
    private heroService: HeroService,
    public heroEvents: HeroFormEventService
  ) { }

  ngOnInit(): void {
    this.heroService.getAll().subscribe((data:Hero[]) => {
      if (data) {
        this.heroData = data;
      }
    });
  }

  editHero(hero: Hero) {
    this.editForm = true;
    this.heroEvents.sendFormConfirmation(true);
    this.heroEvents.setHeroData(hero);
    this.router.navigate(["form"]);
  }

  deleteHero(hero: Hero) {
    console.log("del hero::: ", hero);
  }

}
