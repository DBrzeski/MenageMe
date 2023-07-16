import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {

  constructor(private taskService: TaskService){

  }

  createNewList(title: string){
    this.taskService.createList(title);
    console.log(localStorage.getItem('title_list'))
  }

}