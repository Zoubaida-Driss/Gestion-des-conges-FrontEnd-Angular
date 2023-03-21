import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutercongComponent } from './ajoutercong/ajoutercong.component';
import { ConsultercongparempComponent } from './consultercongparemp/consultercongparemp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListecongComponent } from './listecong/listecong.component';
import { TraicongComponent } from './traicong/traicong.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'listecong', component: ListecongComponent },
  { path: 'traicong', component: TraicongComponent },
  { path: 'consulparemp', component: ConsultercongparempComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
