export function localStorageInitializer() {
  return (): Promise<any> => {
    // Set up local storage here
    localStorage.setItem('title_list', JSON.stringify([]));
    return Promise.resolve();
  };
}
import { APP_INITIALIZER } from '@angular/core';

export const LocalStorageInitializerProvider = {
  provide: APP_INITIALIZER,
  useFactory: localStorageInitializer,
  multi: true
};
