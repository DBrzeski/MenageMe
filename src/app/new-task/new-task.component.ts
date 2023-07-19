import { Component} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
constructor(private taskService:TaskService,private route:ActivatedRoute, private router:Router){}
Id:number = 0;

ngOnInit(){

    this.route.params.subscribe(
      (params: Params) =>{
        this.Id = params['listId']
       }
     )
  }



createTask(text:string){
  this.taskService.addTask(text,this.Id)
  this.router.navigate(['../'], {relativeTo: this.route})
}

}
