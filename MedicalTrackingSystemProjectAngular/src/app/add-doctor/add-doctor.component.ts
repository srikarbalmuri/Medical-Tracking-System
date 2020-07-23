import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  submitted = false;

  constructor(private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit() {
  }

  newDoctor(): void {
    this.submitted = false;
    this.doctor = new Doctor();
  }

  save() {
    this.doctorService.createDoctor(this.doctor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.doctor = new Doctor();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Doctor']);
  }
}

