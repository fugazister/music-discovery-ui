import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BandcampService } from './bandcamp.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-bandcamp',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule, MatTableModule],
  templateUrl: './bandcamp.component.html',
  styleUrl: './bandcamp.component.scss'
})
export class BandcampComponent implements OnInit {
	private bandcampService = inject(BandcampService);
	albums = signal([] as any[]);

	displayedColumns = ['name', 'artists'];

	ngOnInit(): void {
		this.bandcampService.getLibrary().subscribe((result: any) => {
			this.albums.set(result);
		});
	}

	getUserLibrary() {
		this.bandcampService.populateLibrary('fugazister').subscribe();
	}

	getAlbum(albumId: string) {
		this.bandcampService.getAlbum(albumId).subscribe();
	}
}
