import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = 'https://localhost:7020/api'

  constructor(private http: HttpClient ) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/User`)
  }
}
