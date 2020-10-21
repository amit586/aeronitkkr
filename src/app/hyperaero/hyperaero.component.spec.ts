import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperaeroComponent } from './hyperaero.component';

describe('HyperaeroComponent', () => {
  let component: HyperaeroComponent;
  let fixture: ComponentFixture<HyperaeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyperaeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyperaeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
