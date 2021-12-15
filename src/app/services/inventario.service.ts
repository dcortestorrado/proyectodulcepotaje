import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  url = 'http://localhost:3001/api/inventario/';

  constructor(private http: HttpClient) {
        //permite obtener los contactos registrados en la DB consumiendo la API
    //El observable permite decirle a Angular que será una funcion asíncrona
  }

  getInventario(): Observable<any>{
    return this.http.get(this.url);
  }

}




