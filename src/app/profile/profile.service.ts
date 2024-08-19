import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
	private http = inject(HttpClient);

	createUser() {
		return this.http.post('http://localhost:3000/user', {});
	}
}
