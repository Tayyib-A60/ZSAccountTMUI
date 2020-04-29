import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameInquiryComponent } from './name-inquiry/name-inquiry.component';
import { FundsTransferComponent } from './funds-transfer/funds-transfer.component';

const routes: Routes = [
  {path: 'name-inquiry', component: NameInquiryComponent},
  {path: 'funds-transfer', component: FundsTransferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }
