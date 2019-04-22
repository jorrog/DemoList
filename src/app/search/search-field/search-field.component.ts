import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {UpdateSearchTerm} from '../store/search.actions';
import { Router} from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['', Validators.required],
    });
  }

  onSearchSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    this.store.dispatch(new UpdateSearchTerm(this.searchForm.value.searchTerm));
    this.router.navigate(['/search/results']);
  }

}
