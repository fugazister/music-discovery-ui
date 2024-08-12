import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface SpotifyAlbumResponse {
	name: string;
	spotifyId: string;
	raw: any;
}

export interface SpotifyAlbum {

}

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
	private http = inject(HttpClient);

	retrieveAlbums() {
		return this.http.get('http://localhost:3000/spotify/retrieve-user-albums');
	}

	getUserAlbums() {
		return this.http.get<SpotifyAlbumResponse[]>('http://localhost:3000/spotify/user-albums');
	}
}
