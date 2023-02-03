import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos-form',
  template: `
    <form [formGroup]="formGroup">
      <app-todos-form-adresse
        formControlName="adresse"
      ></app-todos-form-adresse>

      <p>Ma ville : {{ ville }}</p>
    </form>
  `,
  styles: [],
})
export class TodosFormComponent implements OnInit {
  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      informationPersonnel: [],
      adresse: ['', Validators.required],
    });
  }

  get ville() {
    return this.formGroup.get('adresse')?.value?.ville;
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((v) => {
      console.log(v);
    });
  }
}
