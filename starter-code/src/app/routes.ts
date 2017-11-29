import { Routes } from "@angular/router";
import { MyhomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: MyhomeComponent },
  { path: 'movie/id', component: MyMovieComponent }
];
export {routes};
