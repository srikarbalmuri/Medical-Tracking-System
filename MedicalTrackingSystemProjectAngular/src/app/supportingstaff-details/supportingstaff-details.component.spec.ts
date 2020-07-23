import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingstaffDetailsComponent } from './supportingstaff-details.component';

describe('SupportingstaffDetailsComponent', () => {
  let component: SupportingstaffDetailsComponent;
  let fixture: ComponentFixture<SupportingstaffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingstaffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingstaffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
