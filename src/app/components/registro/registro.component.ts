import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/servicies/clientes.service';
import { ProductosService } from 'src/app/servicies/productos.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public clienteServicio:ClientesService) {  }

  ngOnInit(): void {
    this.obtenerClientes()

  }

  insertarCliente(form:NgForm){
    this.clienteServicio.insertarCliente(form.value).subscribe(
      res=>{
        form.reset()
        this.clienteServicio.obtenerCliente().subscribe(
          res=>this.clienteServicio.clientes=res,
          err=>console.error(err)
        )
      },
      err=>console.error(err)
    )
  }
  obtenerClientes(){
    this.clienteServicio.obtenerCliente().subscribe(
      res=>{
        console.log(res)
      }
    )
  }
}
