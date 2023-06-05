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
    TransferComponent
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
