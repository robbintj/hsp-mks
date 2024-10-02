import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayListComponent } from './overlay/overlay-list/overlay-list.component';
import { OverlayFormComponent } from './overlay/overlay-form/overlay-form.component';
import { NotFoundComponent } from './overlay/not-found/not-found.component';


const routes: Routes = [
 
  { path: 'overlay-list', component: OverlayListComponent },
  { path: 'overlay-form/:id', component: OverlayFormComponent },
  { path: 'overlay-form', component: OverlayFormComponent },
  { path: '', redirectTo: '/overlay-list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, // Adicione uma rota para lidar com URLs não encontradas
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };  // exportar routes
