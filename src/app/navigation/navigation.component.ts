import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
	private appService = inject(AppService);

	drop() {
		return this.appService.drop().subscribe();
	}
}
