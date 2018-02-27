import { Component, OnInit } from '@angular/core';
import { Plato } from '../../_model/plato';
import { PlatoService } from '../../_service/plato.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  plato: Plato;
  id: number;

  // Inyectamos el service
  // Como recibe parametros , lo capturaremos
  constructor(private platoService: PlatoService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id']; //es el que esta definido en el routing
        console.log(this.id);

        this.plato = this.platoService.getPlatos()[this.id];
        console.log(this.plato);
      }
    )
  }

  // A nuestra url route le añadira el editar
  // this.route ahora es  localhost:4200/plato/id
  // con navigate le indico que continue a otro hijo.
  // se dirige  : localhost:4200/plato/id/editar
  editarPlato(){
    this.router.navigate(['editar'], { relativeTo: this.route });
  }
}
