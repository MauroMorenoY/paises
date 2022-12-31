import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  hayerror: boolean = false
  termino: string = ''
  arreglopaises: Pais[] = []
  paisesSugeridos : Pais[] = []
  
  buscar(termino : string){
    this.hayerror = false
    this.termino= termino;
    this.servicio.buscarPais(this.termino).pipe(
      tap(console.log)
    ).subscribe((resp)=>{
      this.arreglopaises = resp
      
    },(err =>{
      console.log(err)
      this.hayerror = true
      this.arreglopaises = []
    }));
    
  }

  sugerencias(sugerencia : string){
    this.hayerror=false;
    this.servicio.buscarPais(sugerencia)
    .subscribe(resp => this.arreglopaises = resp
      , (err => {
        this.paisesSugeridos = []
        console.log('no deberia estar aqui caballero xd')}))
  }
  constructor(private servicio : PaisService){

  }
}
