import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';
import { PagoProductoComponent } from './components/pago-producto/pago-producto.component';
import { ConfiUsrComponent } from './components/confi-usr/confi-usr.component';
import { InicioSecionComponent } from './components/inicio-secion/inicio-secion.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { RegistroProductosComponent } from './components/registro-productos/registro-productos.component';
import { RepartidorComponent } from './components/repartidor/repartidor.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductoIndividualComponent } from './components/producto-individual/producto-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    VistaGeneralComponent,
    PagoProductoComponent,
    ConfiUsrComponent,
    InicioSecionComponent,
    RegistroProductosComponent,
    RepartidorComponent,
    AdministradorComponent,
    CarritoComponent,
    ProductoIndividualComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
