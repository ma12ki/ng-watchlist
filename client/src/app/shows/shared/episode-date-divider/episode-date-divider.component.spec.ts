import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDateDividerComponent } from './episode-date-divider.component';

describe('EpisodeDateDividerComponent', () => {
  let component: EpisodeDateDividerComponent;
  let fixture: ComponentFixture<EpisodeDateDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDateDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeDateDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
