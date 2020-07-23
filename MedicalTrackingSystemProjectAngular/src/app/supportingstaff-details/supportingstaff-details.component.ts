import { SupportingStaff } from '../supportingstaff';
import { Component, OnInit, Input } from '@angular/core';
import { SupportingstaffService } from '../supportingstaff.service';
import { SupportingstaffListComponent } from '../supportingstaff-list/supportingstaff-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-supportingstaff-details',
  templateUrl: './supportingstaff-details.component.html',
  styleUrls: ['./supportingstaff-details.component.css']
})
// export class SupportingstaffDetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class SupportingstaffDetailsComponent implements OnInit {

  ss_id: number;
  supportingstaff: SupportingStaff;

  constructor(private route: ActivatedRoute,private router: Router,
    private supportingstaffService: SupportingstaffService) { }

  ngOnInit() {
    this.supportingstaff = new SupportingStaff();

    this.ss_id = this.route.snapshot.params['id'];
    
    this.supportingstaffService.getSupportingStaff(this.ss_id)
      .subscribe(data => {
        console.log(data)
        this.supportingstaff = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['Supporting_Staff']);
  }
}
