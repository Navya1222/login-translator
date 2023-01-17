import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormService } from './login';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../component/modal/modal.service';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
export const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers:[FormService,ModalService]
})
export class LoginModule { }
