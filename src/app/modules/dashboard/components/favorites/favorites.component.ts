import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MovieInterface } from "src/app/interfaces/movie.model";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
})
export class FavoritesComponent {
  @Input() favorites: MovieInterface[];
  @Output() removeFavoriteEmitter = new EventEmitter<number>();
  constructor() {
    this.favorites = [];
  }

  removeFavorite(index: number) {
    this.removeFavoriteEmitter.emit(index);
  }
}
