import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesConsoleService {

  constructor() { }

  error(message: string): void {
    console.error(message);
  }
  
}
