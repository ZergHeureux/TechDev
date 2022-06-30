import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListTeacherComponent } from './student-list-teacher.component';

describe('StudentListTeacherComponent', () => {
  let component: StudentListTeacherComponent;
  let fixture: ComponentFixture<StudentListTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentListTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
