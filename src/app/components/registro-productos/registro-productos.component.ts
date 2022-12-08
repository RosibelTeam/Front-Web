import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicies/productos.service';
import { producto } from '../models/tablas';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit {

  constructor(public productosService:ProductosService) { }

  ngOnInit(): void {
  }
  obtenerProductos(){
    this.productosService.obtenerProd().subscribe(
      res=>this.productosService.productoM=res,
      err=>console.error(err)
    )
  }
  obtenerProducto(produ:producto){
    this.productosService.productoSelecto=produ
    this.productosService.actualizar=true

  }
  eliminar(CodigoBarras:String){
    this.productosService.eliminarProducto(CodigoBarras).subscribe(
      res=>
      this.obtenerProductos(),
      err=>console.error(err)
    )
  }
  actualizarprod(form:NgForm){
    this.productosService.actualizarProducto(form.value).subscribe(
      res=>{
        form.reset()
        this.productosService.actualizar=false;
        this.productosService.obtenerProd().subscribe(
          res=>this.productosService.productoM=res,
          err=>console.error(err)
        )
      },
      err=>console.error(err)
    )
  }
  insertarProducto(form:NgForm){
    this.productosService.insertarProducto(form.value).subscribe(
      res=>{
        form.reset()
        this.productosService.obtenerProd().subscribe(
          res=>this.productosService.productoM=res,
          err=>console.error(err)
        )
      },
      err=>console.error(err)
    )
  }
}
