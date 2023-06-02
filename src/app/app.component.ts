import { Component } from '@angular/core';
import { Card } from './models/card';

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
}
