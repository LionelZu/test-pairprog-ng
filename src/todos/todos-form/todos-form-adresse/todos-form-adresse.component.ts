import { Component, forwardRef, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

export interface Adresse {
  numero: number;
  rue: string;
  codePostal: string;
  ville: string;
}

@Component({
  selector: 'app-todos-form-adresse',
  template: `<div [formGroup]="formGroup">
    <label>Adresse </label><input type="text" formControlName="ville" />
  </div> `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TodosFormAdresseComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TodosFormAdresseComponent),
      multi: true,
    },
  ],
})
export class TodosFormAdresseComponent
  implements OnInit, ControlValueAccessor, Validator
{
  formGroup: FormGroup;
  change = (val: Adresse | null) => {};
  touched = () => {};

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      numero: [],
      rue: [],
      codePostal: ['', Validators.required],
      ville: [],
    });
    this.formGroup.valueChanges.subscribe((val) => {
      if (this.formGroup.valid) {
        this.change(val);
      } else {
        this.change(null);
      }
      this.touched;
    });
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.formGroup.invalid ? { invalidAdresse: true } : null;
  }

  writeValue(adresse: Adresse): void {
    this.formGroup.patchValue(adresse, { emitEvent: false });
  }

  registerOnChange(fn: (val: Adresse | null) => void): void {
    this.change = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.touched = fn;
  }

  ngOnInit(): void {}
}

/**
 *
 * Input (j'applique la donnée)
 *
 * Ouput (comment j'envoi la donnée ) :
 *  Je te donne une fonction "change", tu dois l'appeller quand tu as des modifications à propager
 *
 */
