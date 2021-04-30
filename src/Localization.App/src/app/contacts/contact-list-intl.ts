import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { of, merge, BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class ContactListIntl {
    public titleLabel$: Observable<string> = this._translateService.stream("CONTACTS.LIST");
    public createLabel$: Observable<string> = this._translateService.stream("COMMON.CREATE");
    public nameLabel$: Observable<string> = this._translateService.stream("COMMON.NAME");

    constructor(
        private readonly _translateService: TranslateService) {
    }
}