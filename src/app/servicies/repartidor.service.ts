import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repartidor } from '../components/models/tablas';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  URL_API='https://papeleria-production.up.railway.app/api/repartidores'
  repartidor:Repartidor[]=[]
  repartidorSelecto:Repartidor={
  CorreoRepartidor:'',
  Nombre:'',
  Apellidos:'',
  Direccion:'',
  Celular:'',
  Contraseña:''
  }




  constructor(private http:HttpClient) { }
  obtenerRepartidor(){
    return this.http.get<Repartidor[]>(this.URL_API);
  }
  insertarRepartidor(cliente:Repartidor){
    return this.http.post(this.URL_API,cliente);
  }
  eliminarRepartidor(CorreoRepartidor:String){
    return this.http.delete(this.URL_API+"/"+CorreoRepartidor)
  }
  actualizarProducto(repartidor:Repartidor){
    return this.http.put(this.URL_API+"/"+repartidor.CorreoRepartidor,repartidor)
  }
}
