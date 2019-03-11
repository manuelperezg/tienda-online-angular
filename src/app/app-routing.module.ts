import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';

const APP_ROUTES:Routes = [
	{path: 'home', component: PortafolioComponent},
	{path: 'item/:id', component: ItemComponent},
	{path: 'search/:termino', component: SearchComponent},
	{path: 'about', component: AboutComponent},
	{path: '**', pathMatch: 'full', redirectTo: 'home'}

];
@NgModule({
	imports:[
	RouterModule.forRoot(APP_ROUTES,{useHash:true})
	],
	exports: [RouterModule]
})

// (useHash: true) rutas con numerales
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

export class AppRoutingModule  {}