
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  StudentsReg = (datatosend:any) =>{
    return this.http.post("http://localhost:3000/addstudent",datatosend);
  };

  HouseCapReg = (datatosend:any)=>{
    return this.http.post("http://loclahost:3000/housecaptain",datatosend);
  };

  ViewStudents = () =>{
    return this.http.get("http://localhost:3000/viewstudents");
  };

  ViewStudentsByHouse = (house:any) =>{
    return this.http.get(`http://localhost:3000/viewstudents/${house}`)
  };


  

}
