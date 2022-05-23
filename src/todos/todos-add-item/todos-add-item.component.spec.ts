import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { TodosAddItemComponent } from './todos-add-item.component';

describe('TodosAddItemComponent', () => {
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TodosAddItemComponent>> =
    jasmine.createSpyObj('dialogRef', ['close']);
  let spectator: Spectator<TodosAddItemComponent>;
  const createComponent = createComponentFactory({
    component: TodosAddItemComponent,
    imports: [ReactiveFormsModule],
    providers: [
      {
        provide: MatDialogRef,
        useValue: dialogRefSpy,
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have a form with content and category', () => {
    expect(spectator.query('[formControlName="content"]')).toBeTruthy();
    expect(spectator.query('[formControlName="category"]')).toBeTruthy();
  });

  it('should close dialog when click on cancel', () => {
    spectator.click('[data-test-cancel]');
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
