import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDeFilmesComponent } from './components/lista-de-filmes/lista-de-filmes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DetalhesDoFilmeComponent } from './components/detalhes-do-filme/detalhes-do-filme.component';


const routes: Routes = [
  {path: '', redirectTo: '/listaDeFilmes', pathMatch: 'full'},
  {path: 'listaDeFilmes', component: ListaDeFilmesComponent },
  {path: 'user', component: PerfilComponent},
  {path: 'listaDeFilmes/detalhes/:id', component: DetalhesDoFilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
