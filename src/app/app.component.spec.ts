import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // it('should submit employee details', () => {
    
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;

  //   fixture.detectChanges();
  //   let formInput = fixture.debugElement.queryAll(By.css('input'));

  //   let userName = formInput[0].nativeElement;
  //   let phoneNo = formInput[1].nativeElement;
  //   let address = formInput[2].nativeElement;
  //   let submitBtn = fixture.debugElement.query(By.css('button')).nativeNode;
    
  //   userName.value = 'abhishek';
  //   phoneNo.value = 1234567890;
  //   address.value = 'New Delhi';

  //   submitBtn.click();
    
  //   fixture.detectChanges();

  //   console.log('component value', component.empDetails.value);
  // })

  it('should submit employee details', async () => {
    
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    let formInput = fixture.debugElement.queryAll(By.css('input'));
    let userName = formInput[0].nativeElement;
    userName.value = 'abhishek';

  });

});
