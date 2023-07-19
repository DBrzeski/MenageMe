export function localStorageInitializer() {
  return (): Promise<any> => {
    const titleList = localStorage.getItem('title_list');
    const tasklist = localStorage.getItem('task_list');
    if (titleList == null || tasklist == null){
      localStorage.setItem('title_list', JSON.stringify([{"id":1,"title":"Sample 1"},{"id":2,"title":"Sample 2"},{"id":3,"title":"Sample 3"},{"id":4,"title":"Sample 4"}]));
      localStorage.setItem('task_list', JSON.stringify([{"id":1,"text":"Przykładowy task 1","list_id":1,"state":"ToDo"},{"id":2,"state":"Doing","list_id":"1","text":"Przykładowy task 2"},{"id":3,"state":"ToDo","list_id":"1","text":"Przykładowy task 3"},{"id":4,"state":"Done","list_id":"1","text":"Przykładowy task 4"},{"id":5,"state":"Doing","list_id":"2","text":"Przykładowy task 1"},{"id":6,"state":"Done","list_id":"2","text":"Przykładowy task "},{"id":7,"state":"ToDo","list_id":"2","text":"Przykładowy task 3"},{"id":8,"state":"Done","list_id":"2","text":"Przykładowy task 2"},{"id":9,"state":"Doing","list_id":"3","text":"Przykładowy task 1"},{"id":10,"state":"Done","list_id":"3","text":"Przykładowy task 2"},{"id":11,"state":"Done","list_id":"3","text":"Przykładowy task 3"}]));
    }
    return Promise.resolve();
  };
}
import { APP_INITIALIZER } from '@angular/core';

export const LocalStorageInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: localStorageInitializer,
  multi: true
};
