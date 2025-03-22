import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioSesionModule } from './inicio-sesion/inicio-sesion.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion/inicio-sesion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    InicioSesionModule,
    InicioSesionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pago Plux';
}
