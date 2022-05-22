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
  selectedColor: string;
  searchingMovie = false;
  myList: MovieInterface[];
  myfavorite: MovieInterface[];
  todayData: Date;
  message: string = '';
  constructor(private moviesService: MoviesService) {
    this.selectedColor = "orange";
    this.myList = [];
    this.myfavorite = [];
    this.todayData = new Date();
  }

  searchMovie(movieTitle: string) {
    this.myList = [];
    this.moviesService.getMovieList(movieTitle).subscribe(
      (result: any) => {
        if (!result.error)
          this.myList = result.data.results;
        else
          Swal.fire('Try again!!', '', 'error');
      },
    );
  }

  addMyFavorites(favoriteMovie: MovieInterface) {
    const alreadyAdded = this.myfavorite.findIndex(
      (element) => element.title === favoriteMovie.title
    );
    if (alreadyAdded === -1)
      this.myfavorite.push(favoriteMovie);
    else {
      this.message = 'Your Movie Added: ' + favoriteMovie.title;
      Swal.fire(this.message, '', 'error');
    }
  }

  dataPoint() {
    return this.myList.length > 0;
  }

}
