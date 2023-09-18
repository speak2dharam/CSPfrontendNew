import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityAssessmentComponent } from './sustainability-assessment.component';

describe('SustainabilityAssessmentComponent', () => {
  let component: SustainabilityAssessmentComponent;
  let fixture: ComponentFixture<SustainabilityAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SustainabilityAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustainabilityAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
