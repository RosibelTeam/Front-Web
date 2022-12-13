export interface producto {
  Categoria: String;
  CodigoBarras: String;
  Color:String;
  CompraPaquete:number;
  Descripcion:String;
  Entradas:number;
  ExistenciasPaquete:number;
  ExistenciasUnidad:number;
  Imagen:String;
  Imagen2:String;
  Marca:String;
  Piezas:number;
  PrecioMayoreo:number;
  PrecioPaquete:number;
  PrecioUnidad:number;
  UnidadesMayoreo:number;
  idProducto:number


}
export interface Cliente {
  CorreoCliente: String;
  Nombre: String;
  Apellidos: String;
  Direccion: String;
  Celular: string;
  Contrasena: String;
}

export interface Repartidor {
  CorreoRepartidor: String;
  Nombre: String;
  Apellidos: String;
  Direccion: String;
  Celular: String;
  Contraseña: String;
}
