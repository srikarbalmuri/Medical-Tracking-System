import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupportingstaffComponent } from './create-supportingstaff.component';

describe('CreateSupportingstaffComponent', () => {
  let component: CreateSupportingstaffComponent;
  let fixture: ComponentFixture<CreateSupportingstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupportingstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupportingstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
