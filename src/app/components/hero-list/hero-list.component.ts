import { Component, OnInit } from '@angular/core';
import { HeroService } from "../../services/hero.service";

import { Hero } from '../../models/hero';
import { HeroEventService } from 'src/app/services/hero-event.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { DeletePopupComponent } from "../delete-popup/delete-popup.component";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  heroData = [];
  findHero = [];
  lastEventExist = false;

  editForm = false

  constructor(
    private router: Router,
    private heroService: HeroService,
    public heroEvent: HeroEventService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllHeros();
    this.searchHeroList();
  }

  getAllHeros(): void {
    this.heroService.getAll().subscribe((data:Hero[]) => {
      if (data) {
        this.heroData = data;
      }
    });
  }

  searchHeroList(): void {
    this.heroEvent.searchHeroWord.subscribe(event => {
      this.findHero = [];
      this.lastEventExist = true;
      this.heroData.forEach(hero => {
        if (hero.name.toUpperCase().includes(event.toUpperCase())) {
          this.findHero.push(hero);
        }
      });
    });
  }

  editHero(hero: Hero) {
    this.editForm = true;
    this.heroEvent.sendFormConfirmation(true);
    this.heroEvent.setHeroData(hero);
    this.router.navigate(["form"]);
  }

  deleteHero(hero: Hero) {
    const dialogRef = this.dialog.open(DeletePopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.heroService.delete(hero.id);
      }
    });
  }
}