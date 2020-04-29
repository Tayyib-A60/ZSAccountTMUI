import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NameInquiryComponent } from './name-inquiry/name-inquiry.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AccountTmService } from './services/account-tm.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NameInquiryComponent,
    FundsTransferComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AccountTmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
