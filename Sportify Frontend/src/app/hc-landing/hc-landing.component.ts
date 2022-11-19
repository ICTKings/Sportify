import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hc-landing',
  templateUrl: './hc-landing.component.html',
  styleUrls: ['./hc-landing.component.css']
})
export class HcLandingComponent implements OnInit {

  constructor() { 
    for(var  i=0;i<50;i++)
    {
      var f={"name":this.b[Math.floor(Math.random()*this.b.length)],"age":Math.ceil(Math.random()*10), sports:[this.a[Math.floor(Math.random()*this.a.length)],this.a[Math.floor(Math.random()*this.a.length)],this.a[Math.floor(Math.random()*this.a.length)]],"House":this.c[Math.floor(Math.random()*this.c.length)]}
      this.data.push(f)
    }
  }

  ngOnInit(): void {
  }
  a=['relay',800,100,200,400,'frog race','long jump']
  b=['ram','sam','john','renu','ichigo','saitama','dororo','fushi']
  c=['red','blue','green','yellow']
 
data=[{"name":this.b[Math.floor(Math.random()*this.b.length)], "age":10, sports:[800,400,'relay'],"House":'red'}]
red="red"

}