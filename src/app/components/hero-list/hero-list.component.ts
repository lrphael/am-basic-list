import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../services/hero.service";

import { Hero } from '../../models/hero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  heroData = [];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroService.getAll().subscribe((data:Hero[]) => {
      if (data) {
        this.heroData = data;
      }
    });
  }

}
