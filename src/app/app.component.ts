import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing';

  nameVal: string = '';
  empDetails;

  constructor(private fb: FormBuilder) {
    this.empDetails = fb.group({
      empName: [''],
      empPhoneNo: [''],
      empAddress: ['']
    })
  }

  submitEmpDetails = () => {
    console.log(this.empDetails.value);
    this.nameVal = this.empDetails.value.userName;
    
  }

}
