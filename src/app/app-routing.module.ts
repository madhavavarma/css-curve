import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule)},
  { path: 'modals', loadChildren: () => import('./modals/modals.module').then(m => m.ModalsModule)},
  { path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)},
  { path: 'entitlement', loadChildren: () => import('./entitlement/entitlement.module').then(m => m.EntitlementModule)},
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
