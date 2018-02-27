import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../../_service/plato.service';
import { Plato } from './../../_model/plato';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plato-lista',
  templateUrl: './plato-lista.component.html',
  styleUrls: ['./plato-lista.component.css']
})
export class PlatoListaComponent implements OnInit {
  platos: Plato[];
  filterQuery = "";

  // Consumiendo el servicio
  // 1° Inyectamos el servicio , inicializamos el servicio
  constructor(private platoService: PlatoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //  Ahora consumimos un servicio , este retorna un observable
    //  this.platos=this.platoService.getPlatos();
    this.platoService.getPlatos().subscribe(data =>{
      this.platos=data;

      // Para ver los cambios de los datos llamaremos a platosCambio
      this.platoService.platosCambio.subscribe(data=>{
        this.platos=data;
      });
    });

  }
  crearNuevoPlato() {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }
}
