export function localStorageInitializer() {
  return (): Promise<any> => {
    const titleList = localStorage.getItem('title_list');
    const tasklist = localStorage.getItem('task_list');
    if (titleList != null || tasklist != null){
      localStorage.setItem('title_list', JSON.stringify([{"id":1,"title":"Zuzia"}]));
      localStorage.setItem('task_list', JSON.stringify([{"id":1,"text":"Zuzia","list_id":1}]));
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
