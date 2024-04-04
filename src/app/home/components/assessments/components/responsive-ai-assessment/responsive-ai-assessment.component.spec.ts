import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveAiAssessmentComponent } from './responsive-ai-assessment.component';

describe('ResponsiveAiAssessmentComponent', () => {
  let component: ResponsiveAiAssessmentComponent;
  let fixture: ComponentFixture<ResponsiveAiAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveAiAssessmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveAiAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
