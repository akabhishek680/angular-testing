import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should submit username', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    
    const userName = fixture.debugElement.queryAll(By.css('input'))[0].nativeElement;
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    const userNameDisplay = fixture.debugElement.queryAll(By.css('p'))[0].nativeElement;

    userName.value = 'abhishek';
    userName.dispatchEvent(new Event('input'));

    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    
    console.log(userNameDisplay);
    console.log(userNameDisplay.innerHTML);

    expect(component.username).toBe('abhishek');
    expect(userNameDisplay.innerHTML).toBe('abhishek');

  })
});
