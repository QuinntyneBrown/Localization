import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ContactPhoneEditorIntl {
    public name$: Observable<string> = this._translateService.stream("COMMON.NAME");

    constructor(
        private readonly _translateService: TranslateService

    ) {
        
    }
}
