import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-loading-app';

  constructor() { }

  ngOnInit(): void {
  	console.log('user not  loading');
  	console.log('login not  loading');
  }
}
