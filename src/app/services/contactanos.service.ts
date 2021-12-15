import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactanos } from '../models/contactanos';


@Injectable({
  providedIn: 'root'
})
export class ContactanosService {
  url = 'http://localhost:3001/api/contactos/';

  constructor(private http: HttpClient) { 
    //permite obtener los contactos registrados en la DB consumiendo la API
    //El observable permite decirle a Angular que será una funcion asíncrona
  }
  getContactos(): Observable<any>{
    return this.http.get(this.url);
  }

  deleteContacto(id: String): Observable<any>{
    return this.http.delete(this.url + id);
  }

  postContacto(contacto: Contactanos): Observable<any>{
    return this.http.post(this.url, contacto);
  }
}
