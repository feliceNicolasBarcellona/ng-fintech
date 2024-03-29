import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SigninComponent } from './views/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { CardListComponent } from './views/card-list/card-list.component';
import { CardFormComponent } from './views/card-form/card-form.component';
import { CardsComponent } from './views/cards/cards.component';
import { MovementComponent } from './views/movement/movement.component';
import { MovementsComponent } from './views/movements/movements.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FilterByIdPipe } from './shared/pipes/filter-by-id.pipe';
import { TransferComponent } from './views/transfer/transfer.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ContactFormComponent } from './views/contact-form/contact-form.component';
import { AppointmentsComponent } from './views/appointments/appointments.component';
import { LocationListComponent } from './views/location-list/location-list.component';
import { ScheduleConfirmComponent } from './views/schedule-confirm/schedule-confirm.component';
import { ScheduleComponent } from './views/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    LoginComponent,
    CardListComponent,
    CardFormComponent,
    CardsComponent,
    MovementComponent,
    MovementsComponent,
    TruncatePipe,
    FilterByIdPipe,
    TransferComponent,
    ContactsComponent,
    ContactListComponent,
    FilterPipe,
    ContactFormComponent,
    AppointmentsComponent,
    LocationListComponent,
    ScheduleConfirmComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
