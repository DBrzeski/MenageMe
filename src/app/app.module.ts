import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageInitializerProvider } from './app_init';
import { TaskViewComponent } from './task-view/task-view.component';
import { NewListComponent } from './new-list/new-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LocalStorageInitializerProvider,],
  bootstrap: [AppComponent]
})
export class AppModule { }
