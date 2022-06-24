import { Component } from '@angular/core';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  constructor(private userDetailService: UserDetailService) {

  }

  isUserDataPresent = ():boolean => {

    if(this.userDetailService.getDataFromServer() != null) {
      return true;
    }

    return false;
  }
}
