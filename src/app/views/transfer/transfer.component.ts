import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  transferForm = this.fb.group({
    name:["", Validators.required],
    lastName:["", Validators.required],
    iban:["", Validators.required],
    amount:["", Validators.required],
    selectCard:["", Validators.required]
  });

  onSubmit(){
    //TODO
  }

  openContactsList(){
    const dialogRef = this.dialog.open(ContactsComponent, {
      height: 'auto',
      width: '600px'
    })
  }

}
