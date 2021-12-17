import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crear } from '../models/crearcuenta';
import { Patch } from '../models/patch';

@Injectable({
  providedIn: 'root'
})
export class CrearcuentaService {
  url = 'http://localhost:3001/api/cuentas/';

  constructor(private http: HttpClient) {
    //permite obtener los contactos registrados en la DB consumiendo la API
    //El observable permite decirle a Angular que será una funcion asíncrona
  }

  getCuentas(): Observable<any>{
    return this.http.get(this.url);
  }
  
  getCuenta(id: String): Observable<any>{
    return this.http.get(this.url + id);
  }

  deleteCuenta(id: String): Observable<any>{
    return this.http.delete(this.url + id);
  }

  postCuenta(cuenta: Crear): Observable<any>{
    return this.http.post(this.url, cuenta);
  }

  putCuenta(id: String, cuenta: Crear): Observable<any>{
    return this.http.put(this.url + id, cuenta);
  }

  patchCuenta(id: String, parche: Patch): Observable<any>{
    return this.http.patch(this.url + id, parche);
  }
}




