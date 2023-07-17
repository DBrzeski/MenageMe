import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditListComponent } from './edit-list/edit-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewListComponent } from './new-list/new-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  {path:'', redirectTo: '/lists', pathMatch: 'full'},
  {path:'new-list', component:NewListComponent},
  {path:'lists', component:TaskViewComponent },
  {path:'lists/:listId', component:TaskViewComponent },
  {path:'lists/:listId/new-task', component:NewTaskComponent },
  {path:'lists/edit/:listId', component:EditListComponent },
  {path:'lists/:listId/edit-task/:taskId', component:EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
