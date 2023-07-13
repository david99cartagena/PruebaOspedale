import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EpsComponent } from './eps/eps.component';
import { ShowEpsComponent } from './eps/show-eps/show-eps.component';
import { AddEditEpsComponent } from './eps/add-edit-eps/add-edit-eps.component';

import { ShowRolComponent } from './rol/show-rol/show-rol.component';
import { RolComponent } from './rol/rol.component';
import { AddEditRolComponent } from './rol/add-edit-rol/add-edit-rol.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUsuComponent } from './usuario/show-usu/show-usu.component';
import { AddEditUsuComponent } from './usuario/add-edit-usu/add-edit-usu.component';

import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EpsComponent,
    ShowEpsComponent,
    AddEditEpsComponent,
    ShowRolComponent,
    RolComponent,
    AddEditRolComponent,
    UsuarioComponent,
    ShowUsuComponent,
    AddEditUsuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
