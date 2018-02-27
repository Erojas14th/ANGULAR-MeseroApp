

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
// Componentes
import { AppRoutingModule } from './app-routing.module';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';
//Modulos
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
// Servicios
import { PlatoService } from './_service/plato.service';
import { PlatoFilterPipe } from './_pipe/plato-filter.pipe';
// Http
import { HttpClientModule } from '@angular/common/http';
// ngx
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './componentes/modal/confirm-modal/confirm-modal.component';
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
    PlatoInicioComponent,
    PlatoFilterPipe,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [PlatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
