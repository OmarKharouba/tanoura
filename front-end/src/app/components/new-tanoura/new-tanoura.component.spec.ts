import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTanouraComponent } from './new-tanoura.component';

describe('NewTanouraComponent', () => {
  let component: NewTanouraComponent;
  let fixture: ComponentFixture<NewTanouraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTanouraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTanouraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
