import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'jp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(
    private NgbModalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openContactModal() {
    const modalRef = this.NgbModalService.open(ContactModalComponent);
    
    // .result.then(
    //   (result: any) => { 
    //     console.log(JSON.stringify(result));
    //   }
    // );
  }

}
