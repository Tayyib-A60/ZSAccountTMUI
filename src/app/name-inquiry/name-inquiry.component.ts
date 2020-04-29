import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountTmService } from '../services/account-tm.service';

@Component({
  selector: 'app-name-inquiry',
  templateUrl: './name-inquiry.component.html',
  styleUrls: ['./name-inquiry.component.css']
})
export class NameInquiryComponent implements OnInit {

    nameInquiryForm: FormGroup;
    id: number;
    editMode: boolean;
  
    constructor(private accountTmService: AccountTmService) { }
  
    ngOnInit() {
      
      this.initializeForm();
      
    }
  
    private initializeForm() {
      let Trxref = '';
      let ReceiverBank = '';
      let ReceiverAccount = '';
      let SenderBank = '';
  
      this.nameInquiryForm = new FormGroup({
        Trxref: new FormControl(Trxref, Validators.required),
        ReceiverBank: new FormControl(ReceiverBank, [Validators.required,Validators.minLength(2), Validators.maxLength(3)]),
        ReceiverAccount: new FormControl(ReceiverAccount,[ Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        SenderBank: new FormControl(SenderBank, [Validators.required,Validators.minLength(2),  Validators.maxLength(3)]),
      });

    }
  
    makeInquiry() {
      console.log(this.nameInquiryForm.value);
      this.accountTmService.nameInqury(this.nameInquiryForm.value).subscribe(res => {
        console.log(res);
        }
      )
    }

}



