/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostponeComponent } from './postpone.component';

describe('PostponeComponent', () => {
  let component: PostponeComponent;
  let fixture: ComponentFixture<PostponeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostponeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
