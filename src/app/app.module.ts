import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConfiUsrComponent } from './components/confi-usr/confi-usr.component';
import { InicioSecionComponent } from './components/inicio-secion/inicio-secion.component';
import { PagoProductoComponent } from './components/pago-producto/pago-producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioSecionComponent,
    PagoProductoComponent,
    ConfiUsrComponent,
    RegistroComponent,
    VistaGeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
