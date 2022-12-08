export interface producto{
  CodigoBarras:String,
  Categoria:String,
  Marca:String,
  Descripcion:String,
  Piezas:Number,
  Color:String,
  Imagen:String,
  Imagen2:String,
  UnidadesMayoreo:String
  ExistenciasPaquete:number,
  ExistenciasUnidad:Number,
  Entradas:number,
  PrecioUnidad:number,
  PrecioPaquete:number,
  PrecioMayoreo:Number,
  CompraPaquete:number
}
 export interface Cliente{
  CorreoCliente:String,
  Nombre:String,
  Apellidos:String,
  Direccion:String,
  Celular:string,
  Contrasena:String
 }

 export interface Repartidor{
  CorreoRepartidor:String,
  Nombre:String,
  Apellidos:String,
  Direccion:String,
  Celular:String,
  Contraseña:String
 }


