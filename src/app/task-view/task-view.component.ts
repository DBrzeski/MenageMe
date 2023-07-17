import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from '../models/list';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})



export class TaskViewComponent implements OnInit {

  lists: any;
  tasks: any;

constructor(private taskService: TaskService, private route: ActivatedRoute,private router:Router){}

redirectTo(route: string, ...params: any[]) {
  this.router.navigate([route, ...params]);
}


ngOnInit(){
  this.lists = this.taskService.getLists()
  this.route.params.subscribe(
    (params: Params) =>{
      console.log(params)
      this.tasks = this.taskService.getTasks(params['listId']);
    }
  )

}
}



