import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoComponent } from './plato/plato.component';

// Navegaciones : Url y sus componentes
const appRoutes: Routes = [
    { path: 'plato', component: PlatoComponent},
    { path: 'consumo', component: ConsumoComponent},
    { path: 'consulta', component: ConsultaComponent},
    { path: '', redirectTo: 'plato', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}