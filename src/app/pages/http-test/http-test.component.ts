import { Movie } from './../../models/movie';
import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent {
  errorMessage: string;
  sampleMovie: Movie = {
    country: 'USA',
    director: 'Damien Chazelle',
    category: 'Drama, Music',
    plot: 'A promising young drummer',
    poster: `https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`,
    year: '2014',
    title: 'Whiplash',
    imdbRating: '8.5'
  }

  constructor(
    private httpMovies: HttpMoviesService
  ) { }

  get(): Subscription {
    return this.httpMovies.getMovies().subscribe();
  }

  post(): Subscription {
    return this.httpMovies.postMovie(this.sampleMovie).subscribe();
  }

  put(): Subscription {
    return this.httpMovies.putMovie(
      {
        country: 'USA',
        director: 'Damien Chazelle',
        category: 'Drama, Music',
        plot: 'A promising young drummer second version',
        poster: `https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`,
        year: '2018',
        title: 'Whiplash 2',
        imdbRating: '8.5',
        id: '55'
      }
    ).subscribe();
  }

  patch(): Subscription {
    return this.httpMovies.patchMovie(
      {
        plot: 'A promising young drummer second version after patch method',
        year: '2019',
        title: 'Whiplash 3',
        id: '55'
      }
    ).subscribe();
  }

  delete() {
    return this.httpMovies.deletehMovie('55').subscribe();
  }

  error() {
    return this.httpMovies.makeError().subscribe(
      { error: (err: string) => this.errorMessage = err }
    );
  }

  headers() {
    return this.httpMovies.headers().subscribe();
  }
}
