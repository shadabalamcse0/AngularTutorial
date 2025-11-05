import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  template:`
  <h3>Hellow {{name}}</h3>
  <button (click)="name = 'Angular'">Reset</button>`
})

export class App{
  name = 'World';
}

bootstrapApplication(App)
  .catch((err) => console.error(err));
