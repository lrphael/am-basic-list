import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { HeroEventService } from '../../services/hero-event.service';


@Component({
  selector: 'default-form',
  templateUrl: './default-form.component.html',
  styleUrls: ['./default-form.component.scss']
})
export class DefaultFormComponent implements OnInit {

  @Input() heroObject: Hero;

  allSubscriptions: Array<Subscription> = [];
  usersCount: number;
  newHeroForm: FormGroup;
  registerErrors = [];

  constructor(
    public heroEvent: HeroEventService,
    public formBuilder: FormBuilder,
    private heroService: HeroService
  ) { }


  ngOnInit(): void {
    this.checkFormConfirmation();
    this.generateFormObject();
    this.verifyFormType();
  }

  verifyFormType() {
    if (this.heroObject) {
      this.newHeroForm.setValue({ "name": this.heroObject.name });
    }
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
      id: this.heroObject ? this.heroObject.id : this.usersCount,
      name: heroName
    }
  }

  generateNewHero(): void {
    this.getAllUserCounter();
    this.heroService.create(this.getNewHeroObject()).subscribe(_ => { });
  }

  updateAHero(): void {
    this.heroService.update(this.heroObject.id, this.getNewHeroObject()).subscribe(_ => { });
  }


  checkFormConfirmation(): void {
    const heroConfirmSubscription = this.heroEvent.confirmForm.subscribe(event => {
      if (event && this.newHeroForm.valid) {
        if (this.heroObject) {
          this.updateAHero();
        } else {
          this.generateNewHero();
        }
      }
    });
    this.allSubscriptions.push(heroConfirmSubscription);
  }

  unsubscribeVariables() {
    this.allSubscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeVariables();
  }

}
