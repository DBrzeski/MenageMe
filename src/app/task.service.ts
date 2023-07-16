import { Injectable } from '@angular/core';

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

  createList(title: string){
    var data = this.readStorage('title_list');
    if (data != null){
      var table = JSON.parse(data);
    }
    table.push(title);
    this.saveStorage('title_list',table)
  }

}
