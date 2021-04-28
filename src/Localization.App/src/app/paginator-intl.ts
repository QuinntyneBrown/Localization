import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { TranslateParser, TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class AppMatPaginatorIntl extends MatPaginatorIntl {
  private rangeLabelIntl: string;

    constructor(
      private readonly _translateService: TranslateService,
      private readonly _translateParser: TranslateParser) {
      super();
      this.getAndInitTranslations();
      
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
          this.rangeLabelIntl = translation['PAGINATOR.RANGE'];
          this.changes.next();
        });
    }
  
    
    getRangeLabel = (page: number, pageSize: number, length: number) => {
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return this._translateParser.interpolate(this.rangeLabelIntl, { startIndex, endIndex, length });
    };
}