import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VistaGeneralComponent } from './components/vista-general/vista-general.component';
import { PagoProductoComponent } from './components/pago-producto/pago-producto.component';
import { ConfiUsrComponent } from './components/confi-usr/confi-usr.component';
import { InicioSecionComponent } from './components/inicio-secion/inicio-secion.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    VistaGeneralComponent,
    PagoProductoComponent,
    ConfiUsrComponent,
    InicioSecionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
