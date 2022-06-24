import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserDetailService } from './user-detail.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UserDetailService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-testing app is running!');
  });

  it('should return true is user data present in server', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const userDetailMockService = TestBed.inject(UserDetailService);
    spyOn(userDetailMockService, 'getDataFromServer').and.returnValue({name: 'abhishek', age: 25, address: 'New Delhi'});
    expect(app.isUserDataPresent()).toBeTruthy();
  });

  it('should return false if data is not present in server', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const userDetailMockService = TestBed.inject(UserDetailService);
    spyOn(userDetailMockService, 'getDataFromServer').and.returnValue(null);
    expect(app.isUserDataPresent()).toBeFalsy();
  });  
});
