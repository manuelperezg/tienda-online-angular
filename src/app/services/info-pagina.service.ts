import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = { };
  equipo: any[] = [];
  cargando = true;

 constructor(private http: HttpClient) {
  this.cargarInfo();
  this.cargarEquipo();

  }

 private cargarInfo(){
   // console.log('servicio preparado');
   this.http.get('assets/data/data-pagina.json')
       .subscribe( (resp: InfoPagina) =>{
         this.info = resp;
         this.cargando = false;

     })
 }
 private cargarEquipo(){
   this.http.get('https://angular-html-a135d.firebaseio.com/equipo.json')
       .subscribe( (resp: any) =>{
         this.equipo = resp;
         this.cargando = false;
         // console.log(resp);

     })
 }
}
