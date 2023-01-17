import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalserviceService } from 'src/app/services/localservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private translate: TranslateService,private translateservie:LocalserviceService) {
   translate.setDefaultLang('en');
   }

  ngOnInit(): void {
   
  }
  loginRouting(){
    if(this.router.url != '/login') {
      this.router.navigate(['/login']);
    }
  }
  homeRouting(){
    if(this.router.url != '/home') {
      this.router.navigate(['/home']);
    }
  }
  onTranslator(language:string){
    this.translateservie.changeTranslator(language);
    this.translate.use(language);
  }
 
}
