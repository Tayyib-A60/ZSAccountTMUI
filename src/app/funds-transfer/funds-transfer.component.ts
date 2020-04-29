import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountTmService } from '../services/account-tm.service';


@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {

  fundsTransferForm: FormGroup;
    id: number;
    editMode: boolean;
  
    constructor(private accountTmService: AccountTmService) { }
  
    ngOnInit() {
      
      this.initializeForm();
      
    }
  
    private initializeForm() {
      let TrxnRef = ''; 
      let ReceiverBank = '';
      let Amount = ''; 
      let UserTerminalId = ''; 
      let SenderAccount = ''; 
      let ReceiverAccount = ''; 
      let CurrencyCode   = ''; 
      let TransactionType = ''; 
      let NameInquiryRef = ''; 
      let Narration = ''; 
      let Channel = ''; 
      let Instrument = ''; 
  
      this.fundsTransferForm = new FormGroup({
        TrxnRef: new FormControl(TrxnRef, Validators.required),
        ReceiverBank: new FormControl(ReceiverBank, [Validators.required,Validators.minLength(2), Validators.maxLength(3)]),
        Amount: new FormControl(Amount, [Validators.required]),
        UserTerminalId: new FormControl(UserTerminalId, [Validators.required]),
        SenderAccount: new FormControl(SenderAccount,[ Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        ReceiverAccount: new FormControl(ReceiverAccount,[ Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
        CurrencyCode: new FormControl(CurrencyCode, [Validators.required, Validators.maxLength(3)]),
        TransactionType: new FormControl(TransactionType, [Validators.required]),
        NameInquiryRef: new FormControl(NameInquiryRef, [Validators.required]),
        Narration: new FormControl(Narration, [Validators.required]),
        Channel: new FormControl(Channel, [Validators.required]),
        Instrument: new FormControl(Instrument, [Validators.required])
      });

    }
  
    transferFunds() {
      console.log(this.fundsTransferForm.value);
      this.accountTmService.fundsTransfer(this.fundsTransferForm.value).subscribe(res => {
        console.log(res);
      })
      
    }

}
