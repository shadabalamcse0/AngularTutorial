import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[CommonModule],
 
  template:`
  <button (click)="toggle()">Toggle user</button>
  <p>Email: {{user?.profile?.email || '(none)'}}</p>

  `
})

export class App{
 user: {profile?: {email?:string}} | undefined = undefined;
 toggle(){
  this.user = this.user ? undefined : {profile: {email: 'a@example.com'}};
 }
}

bootstrapApplication(App)
  .catch((err) => console.error(err));
