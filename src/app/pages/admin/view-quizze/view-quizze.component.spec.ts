import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizzeComponent } from './view-quizze.component';

describe('ViewQuizzeComponent', () => {
  let component: ViewQuizzeComponent;
  let fixture: ComponentFixture<ViewQuizzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuizzeComponent]
    });
    fixture = TestBed.createComponent(ViewQuizzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
