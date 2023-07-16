import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from './new-list/new-list.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  { path:'', component:TaskViewComponent },
  {path:'new-list', component:NewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
