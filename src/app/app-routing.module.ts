import { ResultadosComponent } from './resultados/resultados.component';
import { DadosComponent } from './dados/dados.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dados', component:DadosComponent},
  {path:'resultados', component:ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
