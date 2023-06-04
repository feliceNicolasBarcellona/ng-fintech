import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() cards: Card[] = []
  @Output() checkTransactions: EventEmitter<Card> = new EventEmitter()
  @Output() removeCard: EventEmitter<Card> = new EventEmitter()
  @Output() add: EventEmitter<void> = new EventEmitter()

}
