import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportingstaffService {

  private baseUrl = 'http://localhost:8080/api/Supporting_Staff';

  constructor(private http: HttpClient) { }

  getSupportingStaff(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSupportingStaff(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateSupportingStaff(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSupportingStaff(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSupportingStaffList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}