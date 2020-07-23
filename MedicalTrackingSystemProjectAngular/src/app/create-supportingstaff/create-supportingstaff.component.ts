import { SupportingstaffService } from '../supportingstaff.service';
import { SupportingStaff } from '../supportingstaff';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-supportingstaff',
  templateUrl: './create-supportingstaff.component.html',
  styleUrls: ['./create-supportingstaff.component.css']
})
// export class CreateSupportingstaffComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class CreateSupportingstaffComponent implements OnInit {

  supportingstaff: SupportingStaff = new SupportingStaff();
  submitted = false;

  constructor(private supportingstaffService: SupportingstaffService,
    private router: Router) { }

  ngOnInit() {
  }

  newSupportingstaff(): void {
    this.submitted = false;
    this.supportingstaff = new SupportingStaff();
  }

  save() {
    this.supportingstaffService.createSupportingStaff(this.supportingstaff)
      .subscribe(data => console.log(data), error => console.log(error));
    this.supportingstaff = new SupportingStaff();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Supporting_Staff']);
  }
}
