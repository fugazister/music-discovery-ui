import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyAlbumResponse, SpotifyService } from '../spotify/spotify.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
  private spotifyService = inject(SpotifyService);

	albums = signal(<SpotifyAlbumResponse[]>[]);
	ngOnInit(): void {
		this.getUserAlbums();
	}
	getUserAlbums() {
		this.spotifyService.getUserAlbums().subscribe(res => {
			console.log('res', res);
			this.albums.set(res);
		});
	}
}
