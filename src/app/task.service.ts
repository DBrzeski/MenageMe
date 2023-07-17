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
  getListbyId(listid: number){
    var data = this.readStorage('title_list')
    var ans
    if (data != null){
      var result = JSON.parse(data)
    }
    result.forEach((list: List) => {
      if(listid == list.id){
        ans = list
      }
    });
    return ans;
  }
  editList(listid: number, entry: List){
    console.log(entry);
    var data = this.readStorage('title_list')
    var newTable: List[] = [];
    if (data != null){
      var result = JSON.parse(data)
    }
    result.forEach((list: List) => {
      if(listid == list.id){
        newTable.push(entry)
      }else{
        newTable.push(list)
      }
    });
    this.saveStorage('title_list',newTable)
  }
  deleteTaskByListId(listId: number){
    var data = this.readStorage('task_list')
    var newTable: Task[] = [];
    var counter = 0;
    if (data != null){
      var result = JSON.parse(data)
    }
    result.forEach((task: Task) => {
      if(listId != task.list_id){
        counter++;
        task.list_id -= 1;
        task.id = counter;
        newTable.push(task)
      }
    });
    this.saveStorage('task_list',newTable)
  }
  deleteListById(listid: number){
    var data = this.readStorage('title_list')
    var newTable: List[] = [];
    var counter = 0;
    if (data != null){
      var result = JSON.parse(data)
    }
    result.forEach((list: List) => {
      if(listid != list.id){
        counter++;
        list.id = counter;
        newTable.push(list)
      }else {
        this.deleteTaskByListId(listid)
      }
    });
    this.saveStorage('title_list',newTable)
  }
  
}
