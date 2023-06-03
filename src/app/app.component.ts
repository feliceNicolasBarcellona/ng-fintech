import { Component } from '@angular/core';
import { Card } from './models/card';
import { CardForm } from './models/card-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-fintech';

  checkTransactions(event: Card){
    console.log(event._id, 'check');
  }

  removeCard(event: Card){
    console.log(event._id, 'remove');
  }

  add(){
    console.log('add');
  }

  addHandler(event: CardForm){
    console.log(event);
  }

  cancelHandler(){
    console.log('cancel');

  }

}
