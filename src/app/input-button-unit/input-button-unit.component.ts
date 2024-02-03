import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-button-unit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-button-unit.component.html',
  styleUrl: './input-button-unit.component.scss'
})
export class InputButtonUnitComponent {
  title = 'Hello World';

  constructor() { 
    console.log('in constructor');
    this.changeTitle('My First Angular App');
    console.log(this.title);
  }
  
  changeTitle(newTitle: string): void {
    this.title = newTitle;
    console.log(this.title);
  }

}
