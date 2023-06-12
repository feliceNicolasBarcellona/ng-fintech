import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnChanges {
  @Input() initialContact: Contact | null = null;
  @Output() saveContact: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    _id:[''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    iban: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialContact'] && this.initialContact) {
      this.contactForm.patchValue(this.initialContact);
    }
  }

  onSubmit() {
    this.saveContact.emit(this.contactForm.value);
  }



}
