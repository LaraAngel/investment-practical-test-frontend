import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOptionComponent } from './nav-option.component';

describe('NavOptionsComponent', () => {
  let component: NavOptionComponent;
  let fixture: ComponentFixture<NavOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavOptionComponent]
    });
    fixture = TestBed.createComponent(NavOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
