import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { CardForm } from 'src/app/models/card-form';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {

  @ViewChild('cardForm', {read: NgForm}) form!: NgForm;

  @Output() addCard: EventEmitter<CardForm> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new  EventEmitter()

  types: string[] = ["Visa", "Mastercard"];

  cardForm = this.fb.group({
    type: ['', Validators.required],
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    cardNumber:['', [Validators.required, Validators.pattern('[0-9]{16}')]],
    securityCode:['', [Validators.required, Validators.pattern('[0-9]{3}') ]]
  })

  constructor(private fb: FormBuilder){}

  onSubmit(){
    console.log(this.cardForm.value);
  }

  onCancel(){
    console.log('reset')
  }

  cleanup(){
    console.log(this.form.reset());
  }

}
