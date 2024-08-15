import { Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BandcampService } from './bandcamp.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bandcamp',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './bandcamp.component.html',
  styleUrl: './bandcamp.component.scss'
})
export class BandcampComponent implements OnInit {
	private bandcampService = inject(BandcampService);
	albums = signal([] as any[]);

	ngOnInit(): void {
	}

	getUserLibrary() {
		this.bandcampService.getUserLibrary('fugazister').subscribe();
	}
}
