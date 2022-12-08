import { Injectable } from '@angular/core';
import { Cliente } from '../components/models/tablas';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  URL_API="https://papeleria-production.up.railway.app/api/clientes"
  clientes:Cliente[]=[]
  clienteSelecto:Cliente={
    CorreoCliente:'',
    Nombre:'',
    Apellidos:'',
    Direccion:'',
    Celular:'',
    Contrasena:''
  }
  constructor(private http:HttpClient) { }

  obtenerCliente(){
    return this.http.get<Cliente[]>(this.URL_API);
  }
  insertarCliente(cliente:Cliente){
    return this.http.post(this.URL_API,cliente);
  }
  eliminarCliente(CorreoCliente:String){
    return this.http.delete(this.URL_API+"/"+CorreoCliente)
  }
}
