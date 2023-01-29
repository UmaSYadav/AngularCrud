import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ota } from './ota';

@Injectable({
  providedIn: 'root'
})
export class OtaserviceService {

  constructor(private http:HttpClient) { }

  //get all otas
  getAllOtas():Observable<Ota[]> {
    return this.http.get<Ota[]>("http://localhost:3000/otas");
  }

  create(payload:Ota):Observable<Ota> {
    return this.http.post<Ota>("http://localhost:3000/otas", payload);
  }

  getOtaById(id:number):Observable<Ota> {
    return this.http.get<Ota>(`http://localhost:3000/otas/${id}`);
  }

  updateOtaById(payload:Ota):Observable<Ota> {
    return this.http.put<Ota>(`http://localhost:3000/otas/${payload.id}`, payload);
  }

  delete(id:number) {
    return this.http.delete(`http://localhost:3000/otas/${id}`);
  }
}
