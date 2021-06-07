import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOverlayComponent } from './box-overlay.component';

describe('BoxOverlayComponent', () => {
  let component: BoxOverlayComponent;
  let fixture: ComponentFixture<BoxOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
