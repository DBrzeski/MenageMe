import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageInitializerProvider } from './app_init';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewListComponent } from './new-list/new-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import {MatIconModule} from '@angular/material/icon';
import { EditListComponent } from './edit-list/edit-list.component'
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    FormsModule
  ],
  providers: [LocalStorageInitializerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
