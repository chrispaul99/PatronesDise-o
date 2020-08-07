import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueloCardComponent } from './vuelo-card.component';

describe('VueloCardComponent', () => {
  let component: VueloCardComponent;
  let fixture: ComponentFixture<VueloCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueloCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
