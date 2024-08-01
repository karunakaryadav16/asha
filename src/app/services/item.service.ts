
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private baseUrl = 'http://localhost:2030'; // Your backend URL

  constructor(private http: HttpClient) { }

  // Create a new record
  createOperation(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/post`, data);
  }


  // Read all records
  getOperations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/get`);
  }

  // Read a single record by id
  getOperationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get/${id}`);
  }

  // Update a record by id
  updateOperation(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/put/${id}`, data);
  }

  // Delete a record by id
  deleteOperation(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}

