

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlatoComponent } from './plato/plato.component';
// Directivas
import { ComboboxDirective } from './_directive/combobox.directive';
// Modulos
import { AppRoutingModule } from './app-routing.module';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ConsumoComponent,
    FooterComponent,
    HeaderComponent,
    PlatoComponent,
    ComboboxDirective,
    PlatoListaComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
