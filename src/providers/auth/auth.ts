import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  //student login
studentLogin(credentials){
//setting headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');

//posting user
return this.http.post("https://metutu.herokuapp.com/api/student/login",JSON.stringify(credentials),{headers: headers});
}
//mentor login
mentorLogin(credentials){
//setting headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');

//posting user
return this.http.post("https://metutu.herokuapp.com/api/mentor/login",JSON.stringify(credentials),{headers: headers});
}
//mentor signup
mentorSignup(mentor){
//setting headers
let headers = new Headers();
headers.append('Content-Type', 'application/json');

//posting user
return this.http.post("https://metutu.herokuapp.com/api/mentor/signup",JSON.stringify(mentor),{headers: headers});
}

//studentSignup
studentSignup(student){

  //setting headers
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  //posting user
  return this.http.post("https://metutu.herokuapp.com/api/student/signup",JSON.stringify(student),{headers: headers});
}

//getiing mentors
getMentors(){

  return this.http.get("https://metutu.herokuapp.com/api/mentors")
  .map(res => res.json())
}
getStudentProfile(id){
  return this.http.get("https://metutu.herokuapp.com/api/student/" +id)
  .map(res=> res.json());
}
getMentorProfile(id){
  return this.http.get("https://metutu.herokuapp.com/api/mentor/" +id)
  .map(res=> res.json());
}
}
