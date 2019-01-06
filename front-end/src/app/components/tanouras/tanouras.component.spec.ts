import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TanourasComponent } from './tanouras.component';

describe('TanourasComponent', () => {
  let component: TanourasComponent;
  let fixture: ComponentFixture<TanourasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanourasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanourasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
