import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppModuleRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MoviesInYearComponent } from './pages/years/movies-in-year/movies-in-year.component';
import { YearsComponent } from './pages/years/years.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesComponent,
    CategoriesComponent,
    PageNotFoundComponent,
    MoviesInCategoryComponent,
    MovieCoverComponent,
    YearsComponent,
    MoviesInYearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
