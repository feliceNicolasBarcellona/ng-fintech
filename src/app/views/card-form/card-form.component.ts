import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardForm } from 'src/app/models/card-form';


@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {

  @Output() addCard: EventEmitter<CardForm> = new EventEmitter();
  @Output() onClick: EventEmitter<void> = new EventEmitter();

  types: string[] = ['Visa', 'Mastercard'];

  cardForm = this.fb.group({
    type: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    number: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
    securityCode: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.addCard.emit(this.cardForm.value as CardForm)
  }

  public cleanup(){
      this.cardForm.reset()
  }

}
