/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowListItemComponent } from './show-list-item.component';

describe('ShowListItemComponent', () => {
  let component: ShowListItemComponent;
  let fixture: ComponentFixture<ShowListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
