import { Injectable } from '@angular/core';
import { producto } from '../components/models/tablas';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../components/models/tablas';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  URL_API='http://localhost:3000/api/producto'
  productoM:producto[]=[];
  productoSelecto:producto={
  CodigoBarras:'',
  Categoria:'',
  Marca:'',
  Descripcion:'',
  Piezas:0,
  Color:'',
  Imagen:'',
  Imagen2:'',
  UnidadesMayoreo:'',
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

  obtenerProd(){
    return this.http.get<producto[]>(this.URL_API)
  }
  insertarProducto(productoM:producto){
    return this.http.post(this.URL_API,productoM)
  }
  actualizarProducto(productoM:producto){
    return this.http.put(this.URL_API+"/"+productoM.CodigoBarras,productoM)
  }
  eliminarProducto(codigoBarras:String){
    return this.http.delete(this.URL_API+"/"+codigoBarras)
  }
}



