import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Movie } from './../../../models/movie';
import { Observable } from 'rxjs';
import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-in-year',
  templateUrl: './movies-in-year.component.html',
  styleUrls: ['./movies-in-year.component.css']
})
export class MoviesInYearComponent implements OnInit {
  movies: Observable<Movie[]>;
  constructor(
    private http: HttpService,
    private acRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movies = this.acRoute.paramMap.pipe(
      switchMap((param: ParamMap) => {
        return this.http.getMoviesFromYear(param.get('year'))
      })
    )
  }

}
