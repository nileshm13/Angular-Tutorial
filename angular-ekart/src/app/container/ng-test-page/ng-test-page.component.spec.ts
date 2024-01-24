import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestPageComponent } from './ng-test-page.component';

describe('NgTestPageComponent', () => {
  let component: NgTestPageComponent;
  let fixture: ComponentFixture<NgTestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTestPageComponent]
    });
    fixture = TestBed.createComponent(NgTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
