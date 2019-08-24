import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QquoteComponent } from './qquote.component';

describe('QquoteComponent', () => {
  let component: QquoteComponent;
  let fixture: ComponentFixture<QquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
