import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-billing',
  templateUrl: './add-billing.component.html',
  styleUrls: ['./add-billing.component.css']
})
export class AddBillingComponent implements OnInit {
submitted=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Patient']);
  }
  list(){
    this.router.navigate(['/Patient']);
  }

}
