import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {

  @Input() searching: boolean;
  @Output() searchMovieEmitter = new EventEmitter<string>();
  
  movieForm: FormGroup;
  options: any = [
    {value: 'movies-0', viewValue: 'movies'},
    {value: 'series-1', viewValue: 'series'},
    {value: 'episodes-2', viewValue: 'episodes'},
  ];

  constructor(private fb: FormBuilder) {
    this.movieForm = this.fb.group({
      title: ["", Validators.required],
      year: [""],
    });
    this.searching = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searching'].currentValue)
      this.searching = changes['searching'].currentValue;
  }

  get getTitle() {
    return this.movieForm.get("title");
  }

  searchMovie() {
    this.searchMovieEmitter.emit(this.getTitle!.value);
  }

}
