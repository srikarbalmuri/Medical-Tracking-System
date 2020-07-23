import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingstaffListComponent } from './supportingstaff-list.component';

describe('SupportingstaffListComponent', () => {
  let component: SupportingstaffListComponent;
  let fixture: ComponentFixture<SupportingstaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportingstaffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingstaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
