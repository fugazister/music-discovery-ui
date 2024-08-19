import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandcampService {
	private http = inject(HttpClient);

	populateLibrary(username: string) {
		return this.http.post(`http://localhost:3000/bandcamp/populate-albums/${username}`, {});
	}

	getLibrary() {
		return this.http.get('http://localhost:3000/bandcamp/albums');
	}
}
