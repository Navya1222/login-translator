import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../component/modal/modal.service';
import { ApiService } from '../services/api.service';
import { LocalserviceService } from '../services/localservice.service';
import { FormService } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  loginForm: FormGroup;//form
  submitted=false;
  clearForm=null;
  constructor(private ModalService:ModalService,public api: ApiService,private formgenerate: FormService, private translate: TranslateService, private translateservie: LocalserviceService, private formbuilder: FormBuilder) {
    this.subscription = this.translateservie.currenttrans.subscribe(res => translate.setDefaultLang(res))
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(this.formgenerate.loginForm())
    this.clearForm=this.loginForm.value
    // var word="HI some Talk"
    // console.log(word.replace(/[^A-Z]/g,"").length)
  }
 
  onSave() {//save
    this.submitted=true;
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
    console.log(this.loginForm.value)
    this.subscription = this.api.postHospitalDetails(this.loginForm.value).subscribe(res => {
      let msg=this.translate.instant('login.Savedsuccess')
      this.submitted=false;
      this.ModalService.confirm(msg)
      console.log('data response', res);
      this.loginForm.patchValue(this.clearForm)
    }, (err) => {
      this.ModalService.confirm('Error')
    });
  }
  }
}



