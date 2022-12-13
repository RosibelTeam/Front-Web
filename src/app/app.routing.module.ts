import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InicioSecionComponent } from "./components/inicio-secion/inicio-secion.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { VistaGeneralComponent } from "./components/vista-general/vista-general.component";

const routes: Routes = [
  {path:'', redirectTo: '/inicioSecion', pathMatch: 'full'},
  {path:'inicioSecion', component: InicioSecionComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'pantallageneral', component: VistaGeneralComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class  AppRoutingModule { }
