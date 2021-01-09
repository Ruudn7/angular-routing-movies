import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Movie } from '../../../models/movie';
import { HttpService } from '../../../services/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie>;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute  ,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit() {
    console.log('jjj')
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(this.http.getMovie(params.get('id')))
        return this.http.getMovie(params.get('id'))
      })
    )
  }

  goToMovies() {
    this.location.back();
  }
}
