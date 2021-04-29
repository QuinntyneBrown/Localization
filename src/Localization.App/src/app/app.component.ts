import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppMatPaginatorIntl } from './paginator-intl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly _translateService: TranslateService) {

      _translateService.addLangs(['en', 'fr']);
      _translateService.setDefaultLang('en');

    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    

  }

  public handleLanguageChanged(language: string) {
    this._translateService.use(language);
  }
}
