import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  template:`
  <h3>{{title}}</h3>
  <p>Hello {{name}}!</p>
  <p>2+3 = {{2+3}}</p>
  <p>Upper: {{name.toUpperCase()}}</p>`
})

export class App{
  title = 'Templates & Interpolation';
  name = 'Angular';
}

bootstrapApplication(App)
  .catch((err) => console.error(err));
