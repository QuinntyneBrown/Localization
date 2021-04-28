import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { of, merge, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ContactEditorIntl {
    public titleLabel$: BehaviorSubject<string> = new BehaviorSubject("Contact List");
    public createLabel$: BehaviorSubject<string> = new BehaviorSubject("Create");
    public nameLabel$: BehaviorSubject<string> = new BehaviorSubject("Name");

    constructor(
        private readonly _translateService: TranslateService) {
    
        merge(of(true), this._translateService.onLangChange).pipe(
          tap(x => this.getAndInitTranslations())
        ).subscribe();
    }

    getAndInitTranslations() {
        this._translateService.get([
            "CONTACTS.LIST",
            "COMMON.CREATE",
            "COMMON.NAME"
          ])
          .pipe(
              tap(translations => {
                this.titleLabel$.next(translations["CONTACTS.LIST"]),
                this.createLabel$.next(translations["COMMON.CREATE"]),
                this.nameLabel$.next(translations["COMMON.NAME"])
              })
          )
          .subscribe();
    }
}