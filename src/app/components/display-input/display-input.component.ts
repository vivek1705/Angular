import { Component } from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.css'
})
export class DisplayInputComponent {

  userName: string = '';
  greeting: string = '';

  sayHello(): void {
    if (this.userName) {
      this.greeting = `Hello, ${this.userName}!`;
    } else {
      this.greeting = 'Please enter your name.';
    }
  }
}
