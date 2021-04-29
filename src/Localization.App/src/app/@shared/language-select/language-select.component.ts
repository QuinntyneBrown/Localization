import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent  {

    @Output() public languageChanged: EventEmitter<string> = new EventEmitter();


}
