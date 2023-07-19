import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeCurrencyComponent} from "./components/home-currency/home-currency.component";

const routes: Routes = [
  {path: '', component: HomeCurrencyComponent},
  {path: '**', redirectTo: '', component: HomeCurrencyComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
