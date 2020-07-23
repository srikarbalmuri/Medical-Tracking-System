
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient_id: number;
  patient: Patient;

  constructor(private route: ActivatedRoute,private router: Router,
    private patientService: PatientService) { }

  ngOnInit() {
    this.patient = new Patient();

    this.patient_id = this.route.snapshot.params['id'];
    
    this.patientService.getPatient(this.patient_id)
      .subscribe(data => {
        console.log(data)
        this.patient = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/Patient']);

}
}
