import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentComponent } from './instrument.component';

describe('InstrumentComponent', () => {
  let component: InstrumentComponent;
  let fixture: ComponentFixture<InstrumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
