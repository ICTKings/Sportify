import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-house-captains',
  templateUrl: './house-captains.component.html',
  styleUrls: ['./house-captains.component.css']
})
export class HouseCaptainsComponent implements OnInit {

  
  constructor(private router:Router) {
   }

  ngOnInit(): void {
  
  }

  housename = "";
  movefunc =() =>{
    sessionStorage.setItem('house',this.housename);
    this.router.navigate(['/houseCaptainLand'])
  }
  

}
