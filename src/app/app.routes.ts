import { Routes } from '@angular/router';
import { BandcampComponent } from './bandcamp/bandcamp.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { SpotifyComponent } from './spotify/spotify.component';

export const routes: Routes = [
  { path: '', component: LibraryComponent },
	{ path: 'spotify', component: SpotifyComponent },
  { path: 'bandcamp', component: BandcampComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'library', component: LibraryComponent },
];
