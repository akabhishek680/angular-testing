import { Component, OnInit } from '@angular/core';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-testing';

  userDetailRecvd: any;

  constructor(private userDetailService: UserDetailService) {

  }
  
  ngOnInit(): void {

    this.userDetailService.getUserDetail().subscribe(response => {
      this.userDetailRecvd = response;
      console.log(typeof(response));
      console.log(response);
    })
  }
}
