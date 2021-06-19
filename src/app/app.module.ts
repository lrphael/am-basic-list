import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';
import { HeroHomeComponent } from './pages/hero-home/hero-home.component';

import { DefaultFormComponent } from './components/default-form/default-form.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroSearchInputComponent } from './components/hero-search-input/hero-search-input.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';

@NgModule({
  declarations: [
    AppComponent,

    HeroDetailComponent,
    HeroFormComponent,

    HeroListComponent,
    HeroSearchInputComponent,
    MenuContainerComponent,
    DefaultFormComponent,
    HeroHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
