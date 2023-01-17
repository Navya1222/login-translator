import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {
  private translateservice = new BehaviorSubject<any>('en');
  currenttrans = this.translateservice.asObservable()
  constructor() { }
  changeTranslator(trans) {
    this.translateservice.next(trans)
  }
}
