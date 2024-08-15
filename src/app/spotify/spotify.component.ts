import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-spotify',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './spotify.component.html',
  styleUrl: './spotify.component.scss'
})
export class SpotifyComponent {
	private spotifyService = inject(SpotifyService);

	populateAlbums() {
		return this.spotifyService.retrieveAlbums().subscribe();
	}
}
