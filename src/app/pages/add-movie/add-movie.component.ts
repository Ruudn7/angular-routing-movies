import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

import { Movie } from './../../models/movie';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  model: Partial<Movie> = {};
  categories: Observable<string[]>;
  yaers: string[];

  constructor(
    public http: HttpService,
    private moviesService: HttpMoviesService
  ) {
    this.categories = this.http.getCategories();
    this.http.getYears().subscribe(
      (years: string[]) => this.yaers = years
    )
  }

  submit() { 
    this.moviesService.postMovie(this.model as Movie).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
