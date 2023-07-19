import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from '../models/list';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent {

  constructor(private taskService:TaskService,private route:ActivatedRoute, private router:Router){}
  Id:number = 0
  Text:string = ''
  Entry: any
  ngOnInit(){

    this.route.params.subscribe(
      (params: Params) =>{
        this.Id = params['listId']
        this.Entry = this.taskService.getListbyId(this.Id);
        this.Text = this.Entry.title;
       }
     )
  }
  editList(text: string){
    this.Entry.title = text;
    this.taskService.editList(this.Id,this.Entry)
  }
  delete(){
    this.taskService.deleteListById(this.Id)
  }
}
