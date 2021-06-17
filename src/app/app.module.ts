import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroSearchInputComponent } from './components/hero-search-input/hero-search-input.component';

@NgModule({
  declarations: [
    AppComponent,

    HeroListComponent,
    HeroFormComponent,
    HeroCardComponent,
    HeroSearchInputComponent,
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
