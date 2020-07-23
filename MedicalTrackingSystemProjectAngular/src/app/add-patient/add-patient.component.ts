import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient = new Patient();
  submitted = false;

  constructor(private patientService: PatientService,
    private router: Router) { }

  ngOnInit() {
  }

  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }

  save() {
    this.patientService.createPatient(this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Patient']);
  }

}
