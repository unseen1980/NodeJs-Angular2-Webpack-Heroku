import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
	selector: 'app',
	template: `
	<h1>NodeJS + Angular2 + Webpack + Heroku</h1>
	<p>Server data: {{serverData}}</p>
	`
})
export class AppComponent implements OnInit {
	serverData: string;

	constructor(private http: Http) { }

	ngOnInit() {
		this.http.get("/api").map(res => res.json()).subscribe((data) => {
			this.serverData = data.testKey
			console.log(data);

		}, (error) => {
			console.log(error)
		}
		);
	}
	
}
