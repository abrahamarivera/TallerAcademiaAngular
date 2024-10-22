import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ip="192.168.0.215"
const port="8080"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url= "http://"+ip+":"+port+"/getDatos";

  getDatos(): Observable<any> {
    return this.http.get(this.url);
  }
}
