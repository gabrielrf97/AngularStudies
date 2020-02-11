import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'starEx';
  isActive = false;

  setStatus() {
    this.isActive = !this.isActive
  }
}
