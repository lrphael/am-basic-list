import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroFormEventService {

  public confirmForm: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  public sendFormConfirmation(confirm: boolean): void {
    this.confirmForm.emit(confirm);
  }

}
