import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  username: string = '';

  submit = (username: string) => {
    this.username = username;
    console.log(this.username);
  }
}
