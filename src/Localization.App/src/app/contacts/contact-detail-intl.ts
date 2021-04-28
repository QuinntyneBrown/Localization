import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { of, merge, BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ContactDetailIntl {
    public editContactLabel$: BehaviorSubject<string> = new BehaviorSubject("Contact List");
    public createContactLabel$: BehaviorSubject<string> = new BehaviorSubject("Create");

    constructor(
        private readonly _translateService: TranslateService) {
    
        merge(of(true), this._translateService.onLangChange).pipe(
          tap(x => this.getAndInitTranslations())
        ).subscribe();
    }

    getAndInitTranslations() {
        this._translateService.get([
            "CONTACTS.CREATE_CONTACT",
            "CONTACTS.EDIT_CONTACT"
          ])
          .pipe(
              tap(translations => {
                this.editContactLabel$.next(translations["CONTACTS.EDIT_CONTACT"]),
                this.createContactLabel$.next(translations["CONTACTS.CREATE_CONTACT"])
              })
          )
          .subscribe();
    }
}