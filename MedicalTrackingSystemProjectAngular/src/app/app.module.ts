import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { CreateSupportingstaffComponent } from './create-supportingstaff/create-supportingstaff.component';
import { SupportingstaffDetailsComponent } from './supportingstaff-details/supportingstaff-details.component';
import { UpdateSupportingstaffComponent } from './update-supportingstaff/update-supportingstaff.component';
import { SupportingstaffListComponent } from './supportingstaff-list/supportingstaff-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AddBillingComponent } from './add-billing/add-billing.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    DoctorDetailsComponent,
    DoctorListComponent,
    UpdateDoctorComponent,
    CreateSupportingstaffComponent,
    SupportingstaffDetailsComponent,
    UpdateSupportingstaffComponent,
    SupportingstaffListComponent,
    AddPatientComponent,
    PatientDetailsComponent,
    PatientListComponent,
    UpdatePatientComponent,
    AddBillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
