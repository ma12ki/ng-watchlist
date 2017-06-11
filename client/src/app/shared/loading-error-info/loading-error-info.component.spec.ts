import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingErrorInfoComponent } from './loading-error-info.component';

describe('LoadingErrorInfoComponent', () => {
  let component: LoadingErrorInfoComponent;
  let fixture: ComponentFixture<LoadingErrorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingErrorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingErrorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
