import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.scss'
})
export class SpotifyComponent {
	private spotifyService = inject(SpotifyService);

	displayedColumns = ['name', 'artists'];

	albums = signal([]);

	populateAlbums() {
		return this.spotifyService.retrieveAlbums().subscribe((result: any) => {
			this.albums.set(result);
		});
	}

	getLikedAlbums() {
		return this.spotifyService.getUserAlbums().subscribe((result: any) => {
			console.log('result', result);
			this.albums.set(result);
		});
	}
}
