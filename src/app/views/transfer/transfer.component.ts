import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactsComponent } from '../contacts/contacts.component';
import { Contact } from './../../models/contact';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {
  constructor(private fb: FormBuilder, public dialog: MatDialog, private snackBar: MatSnackBar) {}

  transferForm = this.fb.group({
    name: ["", Validators.required],
    lastName: ["", Validators.required],
    iban: ["", Validators.required],
    amount: ["", Validators.required],
    selectCard: ["", Validators.required]
  });

  onSubmit() {
    // TODO
    console.log(this.transferForm.value);
    this.snackBar.open('Money Sended', 'SUCCESS');
  }

  openContactsList() {
    const dialogRef = this.dialog.open(ContactsComponent, {
      height: 'auto',
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((selectedContact: Contact) => {
      if (selectedContact) {
        this.transferForm.patchValue({
          name: selectedContact.name,
          lastName: selectedContact.surname,
          iban: selectedContact.iban
        });
      }
    });
  }
}
