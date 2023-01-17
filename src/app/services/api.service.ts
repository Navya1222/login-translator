import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getHospitalDetails(): Observable<any>{
    var getHospitalURL = environment.hospitalcareUrl;
    return this.http.get(getHospitalURL);
  }

  postHospitalDetails(body) : Observable<any> {
    var hospitalDetailsURL = environment.hospitalcareUrl;
    var headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(hospitalDetailsURL, body, {headers: headers});
  }
}
