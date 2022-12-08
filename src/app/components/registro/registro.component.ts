import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from 'src/app/servicies/clientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public clienteServicio:ClientesService) { }

  ngOnInit(): void {
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
}
