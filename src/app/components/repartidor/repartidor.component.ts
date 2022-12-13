import { Component, OnInit } from '@angular/core';
import { RepartidorService } from 'src/app/servicies/repartidor.service';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  insertarRepartidor(Repartidor:RepartidorService){
    
  }

}
