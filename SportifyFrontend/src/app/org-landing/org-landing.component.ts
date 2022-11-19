import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-org-landing',
  templateUrl: './org-landing.component.html',
  styleUrls: ['./org-landing.component.css']
})
export class OrgLandingComponent implements OnInit {

  constructor(private api:ApiService) {
    api.ViewStudents().subscribe(
      (res)=>{
        this.data = res;
      }
    ) 
    
  }

  ngOnInit(): void {
  }
  data:any = []

}
