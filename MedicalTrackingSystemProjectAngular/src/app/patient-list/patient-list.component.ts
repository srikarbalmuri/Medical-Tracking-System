import { PatientDetailsComponent } from '../patient-details/patient-details.component';
import { Observable } from "rxjs";
import { PatientService } from "../patient.service";
import { Patient } from "../patient";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Observable<Patient[]>;

  constructor(private patientService: PatientService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.getPatientsList();
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  patientDetails(patient_id: number){
    this.router.navigate(['detailsPatient', patient_id]);
  }
  updatePat(patient_id: number){
    this.router.navigate(['/updatePatient/',patient_id]);

  }
  Billing(){
    this.router.navigate(['/Billing']);

  }

}
