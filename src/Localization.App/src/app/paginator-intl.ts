import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { TranslateParser, TranslateService } from "@ngx-translate/core";
import { merge, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppMatPaginatorIntl extends MatPaginatorIntl {
  private rangeLabel: string;
  
  constructor(
    private readonly _translateService: TranslateService,
    private readonly _translateParser: TranslateParser) {
    super();

    merge(of(true), this._translateService.onLangChange).pipe(
      tap(x => this.getAndInitTranslations())
    ).subscribe();
  }
  
  getAndInitTranslations() {
    this._translateService.get([
      'PAGINATOR.ITEMS_PER_PAGE',
      'PAGINATOR.NEXT_PAGE',
      'PAGINATOR.PREVIOUS_PAGE',
      'PAGINATOR.RANGE'
    ])
      .subscribe(translation => {
        this.itemsPerPageLabel = translation['PAGINATOR.ITEMS_PER_PAGE'];
        this.nextPageLabel = translation['PAGINATOR.NEXT_PAGE'];
        this.previousPageLabel = translation['PAGINATOR.PREVIOUS_PAGE'];  
        this.rangeLabel = translation['PAGINATOR.RANGE'];        
      });
  }
      
  getRangeLabel = (page: number, pageSize: number, length: number) => {
    length = Math.max(length, 0);
    
    const startIndex = page == 0 ? 1 : page * pageSize;

    const endIndex = pageSize * startIndex > length ? length: pageSize * startIndex;

    return this._translateParser.interpolate(this.rangeLabel, { startIndex, endIndex, length });
  };
}