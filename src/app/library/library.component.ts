import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent implements OnInit {
	private libraryService = inject(LibraryService);

	albums = signal([]);

	ngOnInit(): void {

	}

	populateAlbumsBySpotify() {
		this.libraryService.populateAlbumsBySpotify().subscribe();
	}

	populateAlbumsByBandcamp() {
		this.libraryService.populateAlbumsByBandcamp().subscribe();
	}
}
