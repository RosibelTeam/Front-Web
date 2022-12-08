import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicies/productos.service';
import { producto } from '../models/tablas';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {

  constructor(public productoServise:ProductosService) { }

  ngOnInit(): void {
    this.obtenerProducto()

  }

  obtenerProducto(){
    this.productoServise.obtenerProd().subscribe(
      res=>this.productoServise.productoM=res,
      err=>console.error(err)
    )
  }


}
