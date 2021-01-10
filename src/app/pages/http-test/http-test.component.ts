import { Movie } from './../../models/movie';
import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent {
  // tslint:disable-next-line:max-line-length
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

  get() {
    return this.httpMovies.getMovies().subscribe();
  }

  post() {
    return this.httpMovies.postMovie(this.sampleMovie).subscribe();
  }

  put() {}

  patch() {}

  delete() {}
}
