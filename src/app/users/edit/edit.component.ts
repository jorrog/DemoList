import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/models/app.state';
import {Observable, Subscription} from 'rxjs';
import {UserModel} from '../user.model';
import {AddNewUser, PopulateShowEdit, ResetCurrentUser, UpdateSingleUser} from '../store/user.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {LoadingUI} from '../../store/actions/ui.actions';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  user$: Observable<UserModel>;

  public subscription: Subscription = new Subscription();

  public editUserForm: FormGroup;

  public isEdit: boolean = false;

  public countries: any[] = [
    {name: 'Bulgaria', iso: 'BG'},
    {name: 'United kingdom', iso: 'UK'},
    {name: 'Romania', iso: 'RO'},
    {name: 'Greece', iso: 'GR'},
  ];

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.editUserForm = this.formBuilder.group({
      id: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
    this.user$ = this.store.pipe( select(state => state.user.current) );

    this.syncronizeWithStore();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  syncronizeWithStore() {
    this.subscription.add(
      this.user$.subscribe( user => {
        this.isEdit = user.id > 0;

        if (user.id) {
          this.editUserForm.get('id').patchValue(user.id);
        }

        if (user.firstName) {
          this.editUserForm.get('firstName').patchValue(user.firstName);
        }

        if (user.lastName) {
          this.editUserForm.get('lastName').patchValue(user.lastName);
        }

        if (user.dateOfBirth) {
          this.editUserForm.get('dateOfBirth').patchValue(moment(user.dateOfBirth).toISOString());
        }

        if (user.city) {
          this.editUserForm.get('city').patchValue(user.city);
        }

        if (user.country) {
          this.editUserForm.get('country').patchValue(user.country);
        }

      })
    );
  }

  close() {
    this.store.dispatch(new ResetCurrentUser());
    this.store.dispatch(new PopulateShowEdit(false));
  }

  editUser() {

    // stop here if form is invalid
    if (this.editUserForm.invalid) {
      this.editUserForm.get('firstName').markAsDirty();
      this.editUserForm.get('firstName').updateValueAndValidity();
      this.editUserForm.get('lastName').markAsDirty();
      this.editUserForm.get('lastName').updateValueAndValidity();
      this.editUserForm.get('dateOfBirth').markAsDirty();
      this.editUserForm.get('dateOfBirth').updateValueAndValidity();
      this.editUserForm.get('city').markAsDirty();
      this.editUserForm.get('city').updateValueAndValidity();
      this.editUserForm.get('country').markAsDirty();
      this.editUserForm.get('country').updateValueAndValidity();
      return;
    }

    this.store.dispatch(new LoadingUI(true));

    if (this.isEdit) {
      this.store.dispatch(new UpdateSingleUser(this.editUserForm.value));
    } else {
      this.store.dispatch(new AddNewUser(this.editUserForm.value));
    }

    this.close();
  }

  dateChange(e) {
    this.editUserForm.get('dateOfBirth').patchValue(e);
  }

}
