import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
	private profileService = inject(ProfileService);

	createUser() {
		this.profileService.createUser().subscribe();
	}
}
