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
    this.platos=this.platoService.getPlatos();
  }

}
