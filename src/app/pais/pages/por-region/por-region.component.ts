import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[
    `button{
      margin-right: 20px
    }`
  ]

})
export class PorRegionComponent {
  regiones : string[] =['africa', 'americas', 'asia', 'europe', 'oceania']
  arreglopaises : Pais[] = []

  regionActiva : string = ''

  
  activarRegion(region : string){

    if(region === this.regionActiva)
    {
      return
    }
    this.regionActiva = region
    console.log(this.regionActiva)
    this.servicio.buscarPorRegion(this.regionActiva)
    .subscribe(resp=>{
      this.arreglopaises = resp
    });
    this.arreglopaises = []

  }
  
  cambia(region : string){
    return (region === this.regionActiva) ? 'btn btn-success': 'btn btn-outline-success'
  }
  constructor(private servicio : PaisService){

  }

}
