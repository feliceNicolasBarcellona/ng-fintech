import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {

  constructor(private fb: FormBuilder) {}

  transferForm = this.fb.group({
    name:["", Validators.required],
    lastName:["", Validators.required],
    iban:["", Validators.required],
    amount:["", Validators.required],
    selectCard:["", Validators.required]
  })

}
