
import { SupportingstaffDetailsComponent } from '../supportingstaff-details/supportingstaff-details.component';
import { Observable } from "rxjs";
import { SupportingstaffService } from "../supportingstaff.service";
import { SupportingStaff } from "../supportingstaff";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-supportingstaff-list',
  templateUrl: './supportingstaff-list.component.html',
  styleUrls: ['./supportingstaff-list.component.css']
})
// export class SupportingstaffListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class SupportingstaffListComponent implements OnInit {
  supportingstaffs: Observable<SupportingStaff[]>;

  constructor(private supportingstaffService: SupportingstaffService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.supportingstaffs = this.supportingstaffService.getSupportingStaffList();
  }

  deleteSupportingStaff(ss_id: number) {
    this.supportingstaffService.deleteSupportingStaff(ss_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  SupportingStaffDetails(ss_id: number){
    this.router.navigate(['detailsSupportingStaff', ss_id]);
  }
  updateSS(ss_id: number){
    this.router.navigate(['/updateSupportingStaff/',ss_id]);

  }
}
