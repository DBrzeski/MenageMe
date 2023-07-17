import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  constructor(private taskService:TaskService,private route:ActivatedRoute, private router:Router, private location:Location){}
  Id:number = 0
  Text:string = ''
  Entry: any
  goBack(){
    this.location.back();
  }
  ngOnInit(){

    this.route.params.subscribe(
      (params: Params) =>{
        this.Id = params['taskId']
        console.log(this.Id)
        this.Entry = this.taskService.getTaskById(this.Id);
        console.log(this.Entry)
        this.Text = this.Entry.text;
       }
     )
  }
  changeState(state: string){
      this.Entry.state = state;
      console.log(this.Entry);
      this.taskService.editTask(this.Entry)
      this.goBack();
  }
  deleteTask(){
    this.taskService.deleteTaskById(this.Id);
    this.goBack();
  }
  editText(text:string){
    this.Entry.text = text;
    this.taskService.editTask(this.Entry);
    this.goBack();
  }
}
