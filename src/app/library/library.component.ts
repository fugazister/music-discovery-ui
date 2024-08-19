import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LibraryService } from './library.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
	private libraryService = inject(LibraryService);

	albums = signal([]);

	ngOnInit(): void {
		this.libraryService.getAlbums().subscribe((response: any) => {
			this.albums.set(response);
		});
	}

	populateAlbumsBySpotify() {
		this.libraryService.populateAlbumsBySpotify().subscribe();
	}

	populateAlbumsByBandcamp() {
		this.libraryService.populateAlbumsByBandcamp().subscribe();
	}
}
