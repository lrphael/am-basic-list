import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'w2m-test';

  showForm = false;
  searchForm = false;

  newHero(): void {
    this.showForm = true;
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
