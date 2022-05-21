import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {

  @Input() searching: boolean;
  @Output() searchMovieEmitter = new EventEmitter<string>();

  movieForm: FormGroup;
  options: any = [
    {value: 'movies', viewValue: 'movies'},
    {value: 'series', viewValue: 'series'},
    {value: 'episodes', viewValue: 'episodes'},
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

  get title() {
    return this.movieForm.get("title");
  }

  searchMovie() {
    this.searchMovieEmitter.emit(this.title!.value);
  }

}
