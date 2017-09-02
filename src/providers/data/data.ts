import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';



/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  //url
  private url ="http://localhost:3000/api/teachers"

  constructor(public http: Http) {
  }
getTechers(){
  return this.http.get(this.url)
  .map(res => res.json())
  .do(data => console.log(data))
}
signup(User){
  
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
  
    return this.http.post('https://metutu.herokuapp.com/api/students', JSON.stringify(User), {headers: headers})
  
   }

   validate(email){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
   return this.http.post('https://metutu.herokuapp.com/api/students', JSON.stringify(email), {headers: headers})
 
   }
}
