import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { UserDetailService } from './user-detail.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //method - 1
  it('should return value when observable resolved method 1', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let userDetailServiceMock = TestBed.inject(UserDetailService);

    let spyUserDetail = spyOn(userDetailServiceMock, 'getUserDetail').and.callFake(function() {
     
      let obj: any = [
        { name: 'abhishek', age: 25 },
        { name: 'kumar', age: 20 }
      ];

      let fakeObs = new Observable<Object>(obj);

      return fakeObs;
    });

    app.ngOnInit();

    spyUserDetail.calls.mostRecent().returnValue.subscribe(() => {

      expect(app.userDetailRecvd).toBeGreaterThan(1);
    });
  });

  //method-2
  // it('should return value when observable gets resolved method 2', async(()=> {
    
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   const userDetailServiceMock = TestBed.inject(UserDetailService);

  //   spyOn(userDetailServiceMock, 'getUserDetail').and.callFake(function() {
     
  //     let obj: any = [
  //       { name: 'abhishek', age: 25 },
  //       { name: 'kumar', age: 20 }
  //     ];

  //     let fakeObs = new Observable<Object>(obj);

  //     return fakeObs;
  //   });
    
  //   tick();
  //   component.ngOnInit();
  //   expect(component.userDetailRecvd).toBeGreaterThan(1);

  // }));


  //method - 3
  
  // it('should return value when observable is resolved method 3', async(() => {

  //   let fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   const userDetailServiceMock = TestBed.inject(UserDetailService);

  //   spyOn(userDetailServiceMock, 'getUserDetail').and.callFake(() => {

  //     let obj: any = [
  //       { name: 'abhishek', age: 25 },
  //       { name: 'kumar', age: 20 }
  //     ]

  //     return new Observable<Object>(obj);
  //   })
    
  //   component.ngOnInit();
  //   fixture.whenStable().then(() => {
  //     expect(component.userDetailRecvd).toBeGreaterThan(1);
  //   })
  // }));
  
});
