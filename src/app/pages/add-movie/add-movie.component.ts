import { NgForm } from '@angular/forms';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  model: Partial<Movie>;

  constructor() { }

  ngOnInit(): void {
    this.model = {title: 'Jakiś film'};
  }

  send() { 
    console.log(this.model)
  }

}
