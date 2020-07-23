import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { Observable } from "rxjs";
import { DoctorService } from "../doctor.service";
import { Doctor } from "../doctor";
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.doctors = this.doctorService.getDoctorsList();
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  doctorDetails(doctor_id: number){
    this.router.navigate(['detailsDoctor', doctor_id]);
  }
  updateDoc(doctor_id: number){
    this.router.navigate(['/updateDoctor/',doctor_id]);

  }
}
