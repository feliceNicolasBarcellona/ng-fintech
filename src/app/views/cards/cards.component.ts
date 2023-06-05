import { Component, ViewChild } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardForm } from 'src/app/models/card-form';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardFormComponent } from '../card-form/card-form.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {

  @ViewChild(CardFormComponent) cardForm!: CardFormComponent;

  cards: Card[] = [
    {
      _id: '84ec162e-f9d5-428b-9a63-0f52ed99dbd3',
      number: '0000 0000 0000 0000',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'Visa',
      amount: 15000,
    },
    {
      _id: 'c0aacc67-18d9-4c29-b18b-184e70d0e869',
      number: '1111 1111 1111 1111',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'Mastercard',
      amount: 500,
    },
    {
      _id: '9d566cbf-2b10-4a8c-b918-2ab58537016f',
      number: '2222 2222 2222 2222',
      ownerId: 'et45er5e6fba',
      owner: 'Mario Rossi',
      type: 'Visa',
      amount: 250000,
    },
  ];

  constructor(private snackBar: MatSnackBar) {}

  deleteCard(event: Card) {
    this.cards = this.cards.filter((el) => el._id !== event._id);
    this.snackBar.open('Card Removed', 'SUCCESS');
  }

  newCard(cardForm: CardForm) {
    this.cards = [
      ...this.cards,
      {
        _id: Math.random().toString(),
        number: cardForm.number,
        ownerId: Math.random().toString(),
        owner: 'Mario Rossi',
        type: cardForm.type,
        amount: 250000,
      },
    ];
    this.snackBar.open('Card Added', 'SUCCESS');
  }

  dispose() {
    this.cardForm.cleanup()
    console.log('cleanup');

  }

  checkTransactions() {
    //TODO
  }
}
