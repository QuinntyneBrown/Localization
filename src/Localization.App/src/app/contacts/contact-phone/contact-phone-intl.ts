import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ContactPhoneIntl {
    public phone$: Observable<string> = of("Phone");
    public type$: Observable<string> = of("Type");
}
