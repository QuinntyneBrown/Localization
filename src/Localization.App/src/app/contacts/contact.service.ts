import { Injectable, Inject } from '@angular/core';
import { baseUrl } from '@core/constants';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPagableService } from '@core/ipagable-service';
import { EntityPage } from '@core/entity-page';

@Injectable({
  providedIn: 'root'
})
export class ContactService implements IPagableService<Contact> {

  uniqueIdentifierName: string = "contactId";

  constructor(
    @Inject(baseUrl) private readonly _baseUrl: string,
    private readonly _client: HttpClient
  ) { }

  getPage(options: { index: number; pageSize: number; }): Observable<EntityPage<Contact>> {
    return this._client.get<EntityPage<Contact>>(`${this._baseUrl}api/contact/page/${options.pageSize}/${options.index}`)
  }

  public get(): Observable<Contact[]> {
    return this._client.get<{ contacts: Contact[] }>(`${this._baseUrl}api/contact`)
      .pipe(
        map(x => x.contacts)
      );
  }

  public getById(options: { contactId: string }): Observable<Contact> {
    return this._client.get<{ contact: Contact }>(`${this._baseUrl}api/contact/${options.contactId}`)
      .pipe(
        map(x => x.contact)
      );
  }

  public remove(options: { contact: Contact }): Observable<void> {
    return this._client.delete<void>(`${this._baseUrl}api/contact/${options.contact.contactId}`);
  }

  public create(options: { contact: Contact }): Observable<{ contact: Contact }> {
    return this._client.post<{ contact: Contact }>(`${this._baseUrl}api/contact`, { contact: options.contact });
  }
  
  public update(options: { contact: Contact }): Observable<{ contact: Contact }> {
    return this._client.put<{ contact: Contact }>(`${this._baseUrl}api/contact`, { contact: options.contact });
  }
}
