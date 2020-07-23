
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportingstaffDetailsComponent } from './supportingstaff-details/supportingstaff-details.component';
import { CreateSupportingstaffComponent } from './create-supportingstaff/create-supportingstaff.component';

import { SupportingstaffListComponent } from './supportingstaff-list/supportingstaff-list.component';
import { UpdateSupportingstaffComponent } from './update-supportingstaff/update-supportingstaff.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { AddBillingComponent } from './add-billing/add-billing.component';

const routes: Routes = [
  { path: '', redirectTo: 'Doctor', pathMatch: 'full' },
  { path: 'Doctor', component: DoctorListComponent },
  { path: 'addDoctor', component: AddDoctorComponent },
  { path: 'updateDoctor/:id', component: UpdateDoctorComponent },
  { path: 'detailsDoctor/:id', component: DoctorDetailsComponent },

  { path: 'Supporting_Staff', component: SupportingstaffListComponent },
  { path: 'addSupportingStaff', component: CreateSupportingstaffComponent },
  { path: 'updateSupportingStaff/:id', component: UpdateSupportingstaffComponent },
  { path: 'detailsSupportingStaff/:id', component: SupportingstaffDetailsComponent },


  { path: 'Patient', component: PatientListComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'updatePatient/:id', component: UpdatePatientComponent },
  { path: 'detailsPatient/:id', component: PatientDetailsComponent },
  { path: 'Billing',component: AddBillingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
