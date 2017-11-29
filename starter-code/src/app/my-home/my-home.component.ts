import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Router } from '@angular/router';

@Component({
 selector: 'app-myhome',
 templateUrl: './myhome.component.html',
 styleUrls: ['./myhome.component.css'],
 providers: [CinemaService]
})
export class MyhomeComponent implements OnInit {
 constructor(public service:CinemaService, private router: Router) { }

 ngOnInit() {
 }
 getMovies(){
   this.service.getMovie(this.service.movieList);
 }
 viewDetails(id) {
   this.router.navigate(['movies', id]);
 }
}
