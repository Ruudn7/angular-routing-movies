import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;
  route: ActivatedRoute;

  constructor(
    private http: HttpService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movies = this.acRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.http.getMoviesFromCategory(params.get('category'))
      })
    )

    console.log(this.movies, 'asd')
  }
}
