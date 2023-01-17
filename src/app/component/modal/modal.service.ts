import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) { }
   //referer-https://stackblitz.com/edit/angular-confirmation-dialog?file=app%2Fconfirmation-dialog%2Fconfirmation-dialog.service.ts
  public confirm(msg): Promise<boolean> {
    const modalRef = this.modalService.open(ModalComponent, { size: 'sm'});
    modalRef.componentInstance.msg = msg;
    return modalRef.result;
  }
}