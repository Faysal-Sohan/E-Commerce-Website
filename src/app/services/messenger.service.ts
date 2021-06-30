import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductDetails } from '../product-details.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: ProductDetails) {
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
