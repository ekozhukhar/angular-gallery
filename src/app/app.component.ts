import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
	{name: 'WFN 1'},
	{name: 'WFN 2'},
	{name: 'WFN 3'},
	{name: 'WFN 4'},
	{name: 'WFN 5'},
	{name: 'WFN 6'}
  ]
}
