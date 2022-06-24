import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  sayHelloWorld = ():string => {
    return 'Hello World!!!';
  }

  isSorted = (num_one: number, num_two: number): boolean => {

    if(num_two > num_one) {
      return true;
    }
    return false;
  }
  
}
