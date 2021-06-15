import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchInputComponent } from './hero-search-input.component';

describe('HeroSearchInputComponent', () => {
  let component: HeroSearchInputComponent;
  let fixture: ComponentFixture<HeroSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
