import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit  {

  pais!:Pais;
constructor(private activatedRoute: ActivatedRoute
  , private servicio : PaisService){

}

ngOnInit(): void 
{

  this.activatedRoute.params
  .subscribe(({id})=>{
    console.log(id)
    this.servicio.getPaisPorAlpha(id)
  .subscribe(pais=>{
    this.pais = pais
  })



  })
  
}

}
