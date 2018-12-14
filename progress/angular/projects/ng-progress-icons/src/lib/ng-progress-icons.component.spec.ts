import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgProgressIconsComponent } from './ng-progress-icons.component';

describe('NgProgressIconsComponent', () => {
  let component: NgProgressIconsComponent;
  let fixture: ComponentFixture<NgProgressIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgProgressIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgProgressIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
