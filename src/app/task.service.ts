import { Injectable } from '@angular/core';
import { List } from './models/list';
import { Task} from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 

  constructor() { }

  readStorage(key: string){
    const data = localStorage.getItem(key);
    return data;
  }
  saveStorage(key: string,data: any){
    localStorage.setItem(key, JSON.stringify(data));
  }

  createList(newTitle: string){
    var data = this.readStorage('title_list');
    if (data != null){
      var table = JSON.parse(data);
    }
    const newList: List ={
      id: table.length + 1,
      title: newTitle 
    }
    table.push(newList);
    this.saveStorage('title_list',table)
    return table.length
  }
  getLists(){
    var data = this.readStorage('title_list');
    if (data != null){
      var list = JSON.parse(data);
    }
    return list;
  }
  getTasks(id: number) {
    var result: Task[] = []
    var tasks = this.readStorage('task_list')
    if (tasks != null){
      var data = JSON.parse(tasks);
    }
    data.forEach((task: Task) => {
      if(id == task.list_id){
        console.log(task)
        result.push(task);
      }
    });
    return(result)
  }
  addTask(taskText:string,listid:number){
    var tasks = this.readStorage('task_list')
    if (tasks != null){
      var data = JSON.parse(tasks);
    }
    const newTask: Task = {
      id: data.length + 1,
      state: 'ToDo',
      list_id: listid,
      text: taskText 
    }
    console.log(newTask)
    data.push(newTask)
    this.saveStorage('task_list',data)
  }
}
