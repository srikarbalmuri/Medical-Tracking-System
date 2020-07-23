import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {

  doctor_id: number;
  doctor: Doctor;

  constructor(private route: ActivatedRoute,private router: Router,
    private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctor = new Doctor();

    this.doctor_id = this.route.snapshot.params['id'];
    
    this.doctorService.getDoctor(this.doctor_id)
      .subscribe(data => {
        console.log(data)
        this.doctor = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/Doctor']);
  }
}

