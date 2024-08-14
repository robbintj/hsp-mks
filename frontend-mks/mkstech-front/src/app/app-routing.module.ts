import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayListComponent } from './overlay/overlay-list/overlay-list.component';
import { OverlayFormComponent } from './overlay/overlay-form/overlay-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/overlay-list', pathMatch: 'full' },
  { path: 'overlay-list', component: OverlayListComponent },
  { path: 'overlay-form/:id', component: OverlayFormComponent },
  { path: 'overlay-form', component: OverlayFormComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };  // exportar routes
