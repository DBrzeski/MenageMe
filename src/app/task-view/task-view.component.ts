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
  tasksdoing: any;
  taskstodo: any;
  tasksdone: any;

constructor(private taskService: TaskService, private route: ActivatedRoute,private router:Router){}

redirectTo(route: string, ...params: any[]) {
  this.router.navigate([route, ...params]);
}

redirectToTask(listid: number,taskid: number) {
  var route = "/lists/"+ listid +'/edit-task/' + taskid
  this.router.navigate([route]);
}

listId: number = 0;
ngOnInit(){
  this.lists = this.taskService.getLists()
  this.route.params.subscribe(
    (params: Params) =>{
      this.listId = params['listId'];
      this.tasksdoing = this.taskService.getTasks(params['listId'],'Doing');
      this.taskstodo = this.taskService.getTasks(params['listId'],'ToDo');
      this.tasksdone = this.taskService.getTasks(params['listId'],'Done');
    }
  )

}
}



