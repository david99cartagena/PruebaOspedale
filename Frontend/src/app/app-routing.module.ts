import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';
import { EpsComponent } from './eps/eps.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'rol', component: RolComponent },
  { path: 'eps', component: EpsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
