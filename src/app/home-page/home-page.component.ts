import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';
import { LocalserviceService } from '../services/localservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  items = [{ 'sdfd': 'dfsdf' }]
  subscription: Subscription;
  item: any = [];
  translateitem:any='en'

  constructor(public api: ApiService,private translateservie:LocalserviceService) { }

  ngOnInit(): void {
    this.subscription =this.translateservie.currenttrans.subscribe(res=>this.translateitem=res)
    this.subscription = this.api.getHospitalDetails().subscribe(res => {
      const result=[];
      for(const key in res){
        result.push({...res[key]})
      }
      console.log('data response', result);
      this.item = result;
    }, (err) => {
      alert("Failed to get result");
    });
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
