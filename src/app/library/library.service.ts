import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
	private http = inject(HttpClient);

	getAlbums() {
		return this.http.get('http://localhost:3000/library/albums');
	}
}
