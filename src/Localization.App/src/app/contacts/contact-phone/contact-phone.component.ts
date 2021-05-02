import { Component, Input, OnInit } from '@angular/core';
import { ContactPhone } from '../contact';
import { ContactPhoneIntl } from './contact-phone-intl';

@Component({
  selector: 'app-contact-phone',
  templateUrl: './contact-phone.component.html',
  styleUrls: ['./contact-phone.component.scss']
})
export class ContactPhoneComponent  {
  @Input() public contactPhone: ContactPhone;

  constructor(
    public readonly contactPhoneIntl: ContactPhoneIntl
  ) {

  }
}
