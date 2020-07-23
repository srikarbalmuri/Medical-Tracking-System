import { Component, OnInit } from '@angular/core';
import { SupportingStaff } from '../supportingstaff';
import { ActivatedRoute, Router } from '@angular/router';
import { SupportingstaffService } from '../supportingstaff.service';


@Component({
  selector: 'app-update-supportingstaff',
  templateUrl: './update-supportingstaff.component.html',
  styleUrls: ['./update-supportingstaff.component.css']
})
// export class UpdateSupportingstaffComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class UpdateSupportingstaffComponent implements OnInit {

  id: number;
  supportingstaff: SupportingStaff;
  submitted:false;

  constructor(private route: ActivatedRoute,private router: Router,
    private supportingstaffService: SupportingstaffService) { }

  ngOnInit() {
    this.supportingstaff = new SupportingStaff();

    this.id = this.route.snapshot.params['id'];
    
    this.supportingstaffService.getSupportingStaff(this.id)
      .subscribe(data => {
        console.log(data)
        this.supportingstaff = data;
      }, error => console.log(error));
  }

  updateSupportingStaff() {
    this.supportingstaffService.updateSupportingStaff(this.id, this.supportingstaff)
      .subscribe(data => console.log(data), error => console.log(error));
    this.supportingstaff = new SupportingStaff();
    this.gotoList();
  }

  onSubmit() {
    this.updateSupportingStaff();    
  }

  gotoList() {
    this.router.navigate(['/Supporting_Staff']);
  }
}
