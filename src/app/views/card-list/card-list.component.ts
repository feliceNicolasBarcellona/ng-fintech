import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {

  @Output() checkTransactions: EventEmitter<Card> = new EventEmitter()
  @Output() removeCard: EventEmitter<Card> = new EventEmitter()
  @Output() add: EventEmitter<void> = new EventEmitter()

  cards: Card[] = [
    {
      _id: '84ec162e-f9d5-428b-9a63-0f52ed99dbd3',
      number: '0000 0000 0000 0000',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 15000,
    },
    {
      _id: 'c0aacc67-18d9-4c29-b18b-184e70d0e869',
      number: '1111 1111 1111 1111',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'mastercard',
      amount: 500,
    },
    {
      _id: '9d566cbf-2b10-4a8c-b918-2ab58537016f',
      number: '2222 2222 2222 2222',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'visa',
      amount: 250000,
    },
  ];
}
