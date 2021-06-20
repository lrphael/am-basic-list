import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroEventService } from '../../services/hero-event.service';

@Component({
  selector: 'menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {

  showForm = false;
  searchForm = false;

  constructor(
    private router: Router, 
    public heroEvent: HeroEventService
  ) { }

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.getFormEvent();
  }

  getFormEvent() {
    this.heroEvent.confirmForm.subscribe(event => {
      if (event) {
        this.showForm = true;
      }
    });
  }

  checkCurrentRoute() {
    const currentUrl = window.location.href;
    if (currentUrl.match("form")) {
      this.router.navigate([""]);
    }
  }

  goHeroForm(): void {
    this.showForm = true;
    this.heroEvent.cleanHeroData()
    this.router.navigate(["form"]);
  }

  saveHeroData(): void {
    this.showForm = true;
    this.heroEvent.sendFormConfirmation(true);
  }

  cancelHeroForm(): void {
    this.showForm = false;
    this.router.navigate([""]);
  }

  searchHero(): void {
    this.showForm = false;
    this.searchForm = true;
  }

  cancelSearch(): void {
    this.searchForm = false;
    this.heroEvent.searchHero("");
  }

}
