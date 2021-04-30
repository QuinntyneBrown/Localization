import { Component, ElementRef, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { map, takeUntil, tap } from 'rxjs/operators';
import { fromEvent, Observable, Subject } from 'rxjs';
import { PhoneType } from '../phone-type';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-phone-editor',
  templateUrl: './contact-phone-editor.component.html',
  styleUrls: ['./contact-phone-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactPhoneEditorComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ContactPhoneEditorComponent),
      multi: true
    }       
  ]
})
export class ContactPhoneEditorComponent implements ControlValueAccessor,  Validator  {
  private readonly _destroyed$: Subject<void> = new Subject();
  
  public phoneTypes$: Observable<string[]> = this._translateService.stream("COMMON").pipe(
    map( _ => {
      return this._translateService.currentLang == "en" 
      ? PhoneType.values().sort()
      :[
        PhoneType.Office,
        PhoneType.Home
      ]
    })
  )

  public form = new FormGroup({
    value: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required])
  });

  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _translateService: TranslateService
  ) { 

  }
  
  validate(control: AbstractControl): ValidationErrors {
    return this.form.valid ? null
      : Object.keys(this.form.controls).reduce(
          (accumulatedErrors, formControlName) => {
            const errors = { ...accumulatedErrors };

            const controlErrors = this.form.controls[formControlName].errors;

            if (controlErrors) {
              errors[formControlName] = controlErrors;
            }

            return errors;
          },
          {}
        );
  }
    
  writeValue(obj: any): void {     
    if(obj == null) {
      this.form.reset();
    }

    if(obj) {
      this.form.setValue(obj, { emitEvent: false });
    }    
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._elementRef.nativeElement
      .querySelectorAll("*")
      .forEach((element: HTMLElement) => {
        fromEvent(element, "blur")
          .pipe(
            takeUntil(this._destroyed$),
            tap(x => fn())
          )
          .subscribe();
      });
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
