import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditorComponent } from './contact-editor/contact-editor.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ContactPhoneEditorComponent } from './contact-phone-editor/contact-phone-editor.component';
import { ContactPhoneComponent } from './contact-phone/contact-phone.component';



@NgModule({
  declarations: [ContactListComponent, ContactDetailComponent, ContactEditorComponent, ContactPhoneEditorComponent, ContactPhoneComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild([
      { 
        path: "", component: ContactListComponent,
      }
    ])
  ]
})
export class ContactsModule { }
