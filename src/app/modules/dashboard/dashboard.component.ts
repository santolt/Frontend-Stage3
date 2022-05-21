import { Component } from "@angular/core";
import { MoviesService } from "@app-services/movies.service";
import { MovieInterface } from "src/app/interfaces/movie.model";
import Swal from "sweetalert2";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  movieList: MovieInterface[];
  favoriteShows: MovieInterface[];
  searchingMovie = false;
  selectedColor: string;
  today: Date;
  message: string = '';
  constructor(private moviesService: MoviesService) {
    this.movieList = [];
    this.favoriteShows = [];
    this.selectedColor = "orange";
    this.today = new Date();
  }

  searchMovie(movieTitle: string) {
    this.movieList = [];
    this.moviesService.getMovieList(movieTitle).subscribe(
      (result: any) => {
        if (!result.error)
          this.movieList = result.data.results;
        else
          Swal.fire('Demasiados resultados, intenta escribir más', '', 'error');
      },
    );
  }

  addFavoriteMovie(favoriteMovie: MovieInterface) {
    const alreadyAdded = this.favoriteShows.findIndex(
      (element) => element.title === favoriteMovie.title
    );
    if (alreadyAdded === -1)
      this.favoriteShows.push(favoriteMovie);
    else {
      this.message = 'Movie already added: ' + favoriteMovie.title;
      Swal.fire(this.message, '', 'error');
    }
  }

  removeFavorite(index: number) {
    this.favoriteShows.splice(index, 1);
  }

  hasResults() {
    return this.movieList.length > 0;
  }

  hasFavoriteShow() {
    return this.favoriteShows.length > 0;
  }
}
