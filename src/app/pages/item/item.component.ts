import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productos-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id:string;

  constructor( private route: ActivatedRoute, public productoService:ProductosService) { }

  ngOnInit() {
  	//leer los parametros que pasamos por url(no olvides importar ActivatedRoute)
  	this.route.params
  	.subscribe( parametros=>{
  		// console.log(parametros.id);
  		this.productoService.getProducto( parametros['id'] )
  		.subscribe( (producto: ProductoDescripcion)=>{
        this.id = parametros['id'];
        this.producto = producto;

  		})


  	})
  }

}
