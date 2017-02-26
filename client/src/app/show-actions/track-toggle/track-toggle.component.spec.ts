/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrackToggleComponent } from './track-toggle.component';

describe('TrackToggleComponent', () => {
  let component: TrackToggleComponent;
  let fixture: ComponentFixture<TrackToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
