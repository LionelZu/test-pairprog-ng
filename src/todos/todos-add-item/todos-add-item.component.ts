import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoCreator } from '../todos.model';

type TodoCreatorForm = {
  [Property in keyof TodoCreator]: any;
};
@Component({
  selector: 'app-todos-add-item',
  template: `
    <form (submit)="ok(); $event.preventDefault()">
      <h1 mat-dialog-title>Ajout d'une todo</h1>
      <div mat-dialog-content [formGroup]="addItemForm">
        <mat-form-field>
          <mat-label>Content</mat-label>
          <input matInput formControlName="content" cdkFocusInitial />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Category</mat-label>
          <input matInput formControlName="category" />
        </mat-form-field>
      </div>
      <div mat-dialog-actions align="end">
        <button data-test-cancel mat-button (click)="cancel()" type="button">
          Annuler
        </button>
        <button data-test-add mat-flat-button color="primary" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  `,
  styles: [
    `
      [mat-dialog-content] {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class TodosAddItemComponent {
  addItemForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TodosAddItemComponent>,
    private formBuilder: FormBuilder
  ) {
    this.addItemForm = this.formBuilder.group({
      content: '',
      category: '',
    } as TodoCreatorForm);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ok(): void {
    // TODO
  }
}
