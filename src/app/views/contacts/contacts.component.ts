  import { Contact } from './../../models/contact';
  import { Component } from '@angular/core';
  import { MatDialogRef } from '@angular/material/dialog';
  import { contacts } from '../../../../src/mock-contacts';


  @Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss'],
  })
  export class ContactsComponent {
    visible: boolean = true;

    selectedContact: Contact | null = null;

    contacts: Contact[] = contacts;

    constructor(public dialogRef: MatDialogRef<ContactsComponent>) {}

    selectContact(contact: Contact) {;
      this.dialogRef.close(contact)
    }

    saveHandler(contact: Contact){
      if(this.selectedContact){
        this.editContact(contact)
      } else{
        this.saveContact(contact)
      }
    }

    saveContact(contact: Contact) {
      this.contacts = [
        ...this.contacts,
        {
          _id: Math.random().toString(),
          name: contact.name,
          surname: contact.surname,
          iban: contact.iban,
        },
      ];
      this.toggleModal()
    }

    editContact(contact: Contact) {
      const index = this.contacts.findIndex(el => el._id === this.selectedContact?._id)
      this.selectedContact = contact
      this.contacts[index] = contact
      this.toggleModal()
    }

    removeContact(contact: Contact) {
      this.contacts = this.contacts.filter((el) => el._id !== contact._id);
    }

    toggleModal() {
      this.visible = !this.visible;
      if (this.visible) {
        this.selectedContact = null;
      }
    }
  }
