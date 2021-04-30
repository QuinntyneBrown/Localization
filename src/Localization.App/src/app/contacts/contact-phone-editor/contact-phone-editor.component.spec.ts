import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhoneEditorComponent } from './contact-phone-editor.component';

describe('ContactPhoneEditorComponent', () => {
  let component: ContactPhoneEditorComponent;
  let fixture: ComponentFixture<ContactPhoneEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPhoneEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhoneEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
