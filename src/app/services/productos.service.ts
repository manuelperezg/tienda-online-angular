import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductosService {
	cargando = true;
	productos: Productos[] = [];

	constructor(private http: HttpClient) {
		this.cargarProductos(); 
	}

	private cargarProductos(){
		this.http.get('https://angular-html-a135d.firebaseio.com/productos_idx.json')
		.subscribe( (resp:Productos[]) =>{
			this.cargando = false;
			this.productos = resp;
			console.log(this.productos);
		})
	}
}
