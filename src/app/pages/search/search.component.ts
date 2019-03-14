import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	constructor( private router: ActivatedRoute,
				 public  buscarService: ProductosService){ 

	}

	ngOnInit() {
		//capturar el parametro que se envia por get
		this.router.params
		.subscribe(params => {
			this.buscarService.buscarProducto(params['termino']);
		});
	}
}
