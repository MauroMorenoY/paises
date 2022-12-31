import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Pais } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'
  private filtro : string = '?fields=name,capital,numericCode,nativeName,population,flag,alpha2Code'

  constructor(private http:HttpClient) { }


  buscarPais(termino: string):Observable<Pais[]>
  {
    const url:string = `${this.apiUrl}/name/${termino}/${this.filtro}` 
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino: string):Observable<Pais[]>{
    const url:string = `${this.apiUrl}/capital/${termino}/${this.filtro}` 
    return this.http.get<Pais[]>(url);
  }

  getPaisPorAlpha(id: string):Observable<Pais>{
    const url:string = `${this.apiUrl}/alpha/${id}` 
    return this.http.get<Pais>(url);
  }

  buscarPorRegion(id: string):Observable<Pais[]>{
    const url:string = `${this.apiUrl}/region/${id}/${this.filtro}` 
    return this.http.get<Pais[]>(url);
  }
}
