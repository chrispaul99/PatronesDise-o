import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaMainComponent } from './reserva-main.component';

describe('ReservaMainComponent', () => {
  let component: ReservaMainComponent;
  let fixture: ComponentFixture<ReservaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
