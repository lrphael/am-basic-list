import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { HeroFormEventService } from '../../services/hero-form-event.service';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  
  allSubscriptions: Array<Subscription> = [];
  usersCount: number;
  newHeroForm: FormGroup;
  registerErrors = [];

  constructor(
    public heroEvents: HeroFormEventService,
    public formBuilder: FormBuilder,    
    private heroService: HeroService
  ) { }


  ngOnInit(): void {
    this.checkFormConfirmation();
    this.generateFormObject();
  }

  getAllUserCounter() {
    this.heroService.getAll().subscribe(data => {
      this.usersCount = data.length;
    });
  }

  generateFormObject(): void {
    this.newHeroForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  getNewHeroObject() {
    const heroName = this.newHeroForm.get("name").value;
    return {
      id: this.usersCount,
      name: heroName
    }
  }

  checkFormConfirmation(): void {
    const heroConfirmSubscription = this.heroEvents.confirmForm.subscribe(event => {
      if (event && this.newHeroForm.valid) {
        this.getAllUserCounter();
        this.heroService.create(this.getNewHeroObject()).subscribe(_ => { });
      }
    });
    this.allSubscriptions.push(heroConfirmSubscription);
  }

  unsubscribeVariables() {
    this.allSubscriptions.forEach((sub:Subscription) => {
      sub.unsubscribe();
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeVariables();
  }

}
