import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerExampleComponent } from './ng-container-example.component';

describe('NgContainerExampleComponent', () => {
  let component: NgContainerExampleComponent;
  let fixture: ComponentFixture<NgContainerExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContainerExampleComponent]
    });
    fixture = TestBed.createComponent(NgContainerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
