import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InicioSesionComponent
  ],
  exports: [
    InicioSesionComponent
  ]
})
export class InicioSesionModule { }
