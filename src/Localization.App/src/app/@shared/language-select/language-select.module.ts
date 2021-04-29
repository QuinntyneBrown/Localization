import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './language-select.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [LanguageSelectComponent],
  exports:[
    LanguageSelectComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LanguageSelectModule { }
