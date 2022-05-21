import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieInterface } from 'src/app/interfaces/movie.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ["title", "type", "year", "action"];
  dataSource: MovieInterface[];
  movieForm: FormGroup;
  @Input() movieList: MovieInterface[];
  @Output() addFavoriteMovieEmitter = new EventEmitter<MovieInterface>();
  constructor(private fb: FormBuilder) {
    this.dataSource = [];
    this.movieList = [];
    this.movieForm = this.fb.group({
      title: [""],
      movies: this.fb.array([]),
    });
  }
  
  ngOnInit(): void {
    this.dataSource = this.movieList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['movieList'].currentValue) {
      this.dataSource = changes['movieList'].currentValue;
      this.getMovieList.clear();
      this.dataSource.forEach((element) => {
        this.getMovieList.push(this.addMovie(element));
      });
    }
  }

  get getMovieList() {
    return this.movieForm.get("movies") as FormArray;
  }

  addMovie(movieData: MovieInterface) {
    return this.fb.group({
      title: [movieData.title],
      type: [movieData.type],
      year: [movieData.year],
    });
  }

  addFavoriteMovie(index: number) {
    this.addFavoriteMovieEmitter.emit(this.dataSource[index]);
  }
}
