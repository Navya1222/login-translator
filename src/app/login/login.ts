import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

@Injectable()
export class FormService{
    form:any
    constructor(){}
    loginForm(){
        this.form={
            title:[null,Validators.required],
            body:[null,Validators.required],
            date:[new Date],
            title_malayalam: [''],
            body_malayalam: [''],
            enable: [true]
        }
        return this.form
    }
} 