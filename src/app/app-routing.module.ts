import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardAdminComponent} from "./modulo_admin/components/dashboard-admin/dashboard-admin.component";
import {UsuariosComponent} from "./modulo_admin/components/usuarios/usuarios.component";
import {UsuarioComponent} from "./modulo_admin/components/usuario/usuario.component";
import {GesPagoComponent} from "./modulo_tienda/ges-pago/ges-pago.component";
import {LisPagoComponent} from "./modulo_tienda/lis-pago/lis-pago.component";
import {AgendaComponent} from "./modulo_tienda/agenda/agenda.component";

const routes: Routes = [
  { path: 'dashboard-admin' , component: DashboardAdminComponent},
  { path: 'listapagos' , component: LisPagoComponent},
  { path: 'pagos/:id', component: LisPagoComponent},
  {path: 'agenda', component: AgendaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard-admin'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
