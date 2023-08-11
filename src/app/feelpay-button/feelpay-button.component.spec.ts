import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelpayButtonComponent } from './feelpay-button.component';

describe('FeelpayButtonComponent', () => {
  let component: FeelpayButtonComponent;
  let fixture: ComponentFixture<FeelpayButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeelpayButtonComponent]
    });
    fixture = TestBed.createComponent(FeelpayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
