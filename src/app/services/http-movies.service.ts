import { Movie } from './../models/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies'

  constructor(
    private http: HttpClient
  ) {}

  getMovies(): Observable<HttpResponse<Movie[]>> {
    return this.http.get<HttpResponse<Movie[]>>(this.url, {observe: 'response'}).pipe(
      tap(console.log)
    )
  }

  postMovie(movie: Movie) {
    return this.http.post(this.url, movie).pipe(
      tap(console.log)
    )
  }
}
