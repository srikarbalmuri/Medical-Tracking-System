import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:8080/api/Doctor';

  constructor(private http: HttpClient) { }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, doctor);
  }

  updateDoctor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDoctorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}