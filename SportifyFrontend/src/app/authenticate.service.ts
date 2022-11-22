import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode, {JwtPayload} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }

  AuthenticateCaptain = (data:any) =>{
    return this.http.post<any>("http://localhost:3000/housecaptainlogin",data);
  }

  getCapToken = () =>{
    return localStorage.getItem('housecaptoken');
  }

  AuthenticateOrg =(data:any)=>{
    return this.http.post<any>("http://localhost:3000/adminlogin",data);
  }

  getOrgToken = () =>{
    
  }
}
