import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';
import { producto } from '../components/models/tablas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  URL_API='https://papeleria-production.up.railway.app/api/productos/categoria'
  productoM:producto[]=[];
  productoSelecto:producto={
  idProducto:0,
  CodigoBarras:'',
  Categoria:'',
  Marca:'',
  Descripcion:'',
  Piezas:0,
  Color:'',
  Imagen:'',
  Imagen2:'',
  UnidadesMayoreo:0,
  ExistenciasPaquete:0,
  ExistenciasUnidad:0,
  Entradas:0,
  PrecioUnidad:0,
  PrecioPaquete:0,
  PrecioMayoreo:0,
  CompraPaquete:0
  };
  actualizar=false;


  constructor(private http:HttpClient) { }

  obtenerCatego(Categoria:String){
    return this.http.get(this.URL_API+"/"+Categoria)
  }

  obtenerCliente(){
    return this.http.get<producto[]>(this.URL_API);
  }

}
