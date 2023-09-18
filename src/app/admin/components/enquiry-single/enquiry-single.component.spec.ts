import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirySingleComponent } from './enquiry-single.component';

describe('EnquirySingleComponent', () => {
  let component: EnquirySingleComponent;
  let fixture: ComponentFixture<EnquirySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirySingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquirySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
