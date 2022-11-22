import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hc-landing',
  templateUrl: './hc-landing.component.html',
  styleUrls: ['./hc-landing.component.css']
})
export class HcLandingComponent implements OnInit {

  constructor(private api:ApiService) { 
    api.ViewStudentsByHouse(this.house).subscribe(
      (res)=>{
        this.data = res;
      }
    )
  }

  ngOnInit(): void {
  }
  data:any = []
  house:any = sessionStorage.getItem('house');
}