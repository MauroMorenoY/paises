import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  hayerror: boolean = false
  termino: string = ''
  arreglopaises: Pais[] = []
  paisesSugeridos : Pais[] = []

  
  buscar(termino : string){
    this.hayerror = false
    this.termino= termino;
    this.servicio.buscarCapital(this.termino).subscribe((resp)=>{
      console.log(resp)
      this.arreglopaises = resp
    },(err =>{
      console.log(err)
      this.hayerror = true
      this.arreglopaises = []
    }));
    
  }

  sugerencias(sugerencia : string){
    this.hayerror=false;
    this.servicio.buscarCapital(sugerencia)
    .subscribe(resp => this.arreglopaises = resp
      , (err => {
        this.paisesSugeridos = []
        console.log('no deberia estar aqui caballero xd')}))
  }


  constructor(private servicio : PaisService){

  }
}
