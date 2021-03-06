

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
import { ConsumoService } from './_service/consumo.service';
import { ConsultaService } from './_service/consulta.service';
import { ClienteService } from './_service/cliente.service';
import { LoginService } from './_service/login.service';
import { LoginGuard } from './_service/login-guard.service';
// Http
import { HttpClientModule } from '@angular/common/http';
// ngx
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmModalComponent } from './componentes/modal/confirm-modal/confirm-modal.component';
import { TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
// autocompletado
import { Ng2CompleterModule } from "ng2-completer";
import { DatePickerComponent } from './componentes/pickers/date-picker/date-picker.component';
import { SimpleModalComponent } from './componentes/modal/simple-modal/simple-modal.component';
import { LoginComponent } from './login/login.component';

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
    ConfirmModalComponent,
    DatePickerComponent,
    SimpleModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    Ng2CompleterModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [PlatoService, ConsumoService, ConsultaService, ClienteService,LoginService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
