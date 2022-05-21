import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { AngularMaterialModule, FormsModule } from '@shared/index';

import { DashboardComponent } from "./dashboard.component";

import { ReactiveFormsModule } from "@angular/forms";
import { FormComponent } from './components/form/form.component';
import { TableMovies } from './components/table-movies/table-movies';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [DashboardComponent, FormComponent, TableMovies, FavoritesComponent],
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule],
})
export class DashboardModule {}
