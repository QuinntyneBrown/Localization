import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ContactDetailIntl {
    public editContactLabel$: Observable<string> = this._translateService.stream("CONTACTS.EDIT_CONTACT");

    public createContactLabel$: Observable<string> = this._translateService.stream("CONTACTS.CREATE_CONTACT");

    constructor(
        private readonly _translateService: TranslateService) {  
    }
}