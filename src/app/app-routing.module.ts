import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOtaComponent } from './add-ota/add-ota.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditOtaComponent } from './edit-ota/edit-ota.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'addota', component:AddOtaComponent},
  {path: 'editota/:id', component:EditOtaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
