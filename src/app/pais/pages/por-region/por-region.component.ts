import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-top: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: Country[] = [];

  //Recordar que para usar el servicio se debe injectar!!!
  constructor( private paisService: PaisService) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string ) {

    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )//para llamarlo envio la region
      .subscribe( paises => {//con subscrive consumo el servicio
        this.paises = paises;
      });
  }

}
