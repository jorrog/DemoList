import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import {AppState} from './models/app.state';
import {UserEffects} from '../users/store/user.effects';


export function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return localStorageSync({keys: ['ui'], rehydrate: true})(reducer);
}

const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      UserEffects
    ])
  ],
  declarations: [],
  exports: [
    StoreModule
  ],
  providers: []
})
export class DemoStoreModule { }
