import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { baseUrl } from '@core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { AppMatPaginatorIntl } from './paginator-intl';
import { LanguageSelectModule } from '@shared/language-select/language-select.module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LanguageSelectModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })    
  ],
  providers: [
    { provide: baseUrl, useValue: "https://localhost:5001/" },
    { provide: MatPaginatorIntl, useClass: AppMatPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
