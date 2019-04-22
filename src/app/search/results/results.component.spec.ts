import {async, ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import {before} from 'selenium-webdriver/testing';
import {UserModel} from '../../users/user.model';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  const allUsers: UserModel[] = [
    {
      name: 'Test Test',
      login: 'testting',
      email: 'test@gmail.com',
      location: 'Sofia'
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should find results', () => {
    component.searchUsers('test');
    jasmine.clock().tick(1000);
    expect(component.users.length > 0).toBeGreaterThan(0);
  });
});
