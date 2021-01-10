import { Movie } from './../models/movie';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

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

  putMovie(movie: Movie) {
    return this.http.put(this.url + '/' + movie.id, movie).pipe(
      tap(console.log)
    )
  }

  patchMovie(movie: Partial<Movie>) {
    return this.http.patch(this.url + '/' + movie.id, movie).pipe(
      tap(console.log)
    )
  }

  deletehMovie(id: string) {
    return this.http.delete(this.url + '/' + id).pipe(
      tap(console.log)
    )
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete(this.url + '/999').pipe(
      tap(console.log),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name}`,
      `Message: ${error.message}`,
      `Status: ${error.status}`,
    );
    return throwError('Something goes wrong')
  }

  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-type': 'application/json',
      'X-Custom-header': 'test-app'
      
    });
    return this.http.get<Movie[]>(this.url, {observe: 'response', headers: myHeaders} ).pipe(
      tap((res: HttpResponse<Movie[]>) => {
        console.log(res, res.headers.keys())
        console.log(res.headers.get('cache-control'))
        console.log(res.headers.get('content-type'))
        console.log(res.headers.get('expires'))
        console.log(res.headers.get('pragma'))
      })
    )
  }

  params(): Observable<Movie[]> {
    const httpParams = new HttpParams()
      .set('_sort', 'title')
      .set('_order', 'desc')

    return this.http.get<Movie[]>(this.url, {params: httpParams}).pipe(
      tap(console.log)
    )
  }
}
