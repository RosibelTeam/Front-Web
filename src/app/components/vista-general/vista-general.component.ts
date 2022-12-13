import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicies/productos.service';
import { producto } from '../models/tablas';
import { CategoriaService } from 'src/app/servicies/categoria.service';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css'],
})
export class VistaGeneralComponent implements OnInit {

  constructor(public productoServise: ProductosService, public categoriaServicio:CategoriaService ) {}

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto() {
    this.productoServise.obtenerProd().subscribe(
      (res) => (this.productoServise.productoM = res),
      (err) => console.error(err)
    );
  }
  obtenerCat(Categoria:String){
    this.categoriaServicio.obtenerCatego(Categoria).subscribe(
      res=>{
        this.productoServise.obtenerProd().subscribe(
          res=>this.productoServise.productoM=res,
          err=>console.error(err)
        )
      },
      err=>console.error(err)
    )
  }

}
