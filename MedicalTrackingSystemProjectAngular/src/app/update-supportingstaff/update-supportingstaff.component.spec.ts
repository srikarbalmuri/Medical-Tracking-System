import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupportingstaffComponent } from './update-supportingstaff.component';

describe('UpdateSupportingstaffComponent', () => {
  let component: UpdateSupportingstaffComponent;
  let fixture: ComponentFixture<UpdateSupportingstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupportingstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupportingstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
