import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductosService {
	cargando = true;
	productos: Productos[] = [];
	productoFiltrado: Productos [] = [];

	constructor(private http: HttpClient) {
		this.cargarProductos(); 
	}

	private cargarProductos() {
		return  new Promise((resolve, reject) => {
			this.http.get('https://angular-html-a135d.firebaseio.com/productos_idx.json')
			.subscribe( (resp: Productos[]) => {
				this.productos = resp;
				this.cargando = false;
				resolve(); // Indicar que la promesa terminó;
			});
		});
	}
	getProducto(id: string) {
		// recuerda poner los apostrofes para que funciones ``
		return this.http.get(`https://angular-html-a135d.firebaseio.com/productos/${id}.json`);
		
	}
	buscarProducto( termino: string) {
		if (this.productos.length === 0) {
			// cargar productos
			this.cargarProductos().then (() => {
				// este codigo  se va a ejecutar despues de tener los productos
				// aplicar filtro
				this.filtrarProductos( termino );
			});
		} else {
			// aplicar filtro
			this.filtrarProductos( termino );

		}
		/*this.productoFiltrado = this.productos.filter(productos => {
			return true;
		})*/

	}

	/*private filtrarProductos(termino: string) {
        this.productoFiltrado =  this.productos.filter(x => x.categoria.toLowerCase().includes(termino));
    }*/
    private filtrarProductos(termino: string) {
    	this.productoFiltrado = [];
    	// el termino se pasa a minuscula 
    	termino = termino.toLowerCase();
    	this.productos.forEach(prod => {
    		// convertimos el titulo a minuscula
    		const tituloToLower = prod.titulo.toLocaleLowerCase();
    		if ( prod.categoria.indexOf(termino) >= 0 || tituloToLower.indexOf(termino) >= 0) {
    			this.productoFiltrado.push(prod);
    		}
    	});
    	console.log(this.productoFiltrado);
    }
}
