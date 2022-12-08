import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicies/clientes.service';

@Component({
  selector: 'app-inicio-secion',
  templateUrl: './inicio-secion.component.html',
  styleUrls: ['./inicio-secion.component.css']
})
export class InicioSecionComponent implements OnInit {

  constructor(private clienteServicio:ClientesService) { }

  ngOnInit(): void {
  }

  obtenerClientes(){
    this.clienteServicio.obtenerCliente().subscribe(
      res=>{
        console.log(res)
      }
    )
  }
  
}

