import { Http } from '@angular/http';
import { Injectable  } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
	
	constructor(private http: Http) {}
	
	getUsers() {
		return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
		.map(function(response){
			return response.json();
		})
		.map(response => response.results)
		.map(users => {
			return users.map(u => {
				return {
					name: u.name.first + ' ' + u.name.last,
					image: u.picture.large,
					geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street
				}
			})
		});
	}
	
	users = [
		{name: 'WFN 1'},
		{name: 'WFN 2'},
		{name: 'WFN 3'},
		{name: 'WFN 4'},
		{name: 'WFN 5'},
		{name: 'WFN 6'}
	  ]
}