import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiDataReadinessAssessmentComponent } from './generative-ai-data-readiness-assessment.component';

describe('GenerativeAiDataReadinessAssessmentComponent', () => {
  let component: GenerativeAiDataReadinessAssessmentComponent;
  let fixture: ComponentFixture<GenerativeAiDataReadinessAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerativeAiDataReadinessAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeAiDataReadinessAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
