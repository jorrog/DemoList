import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchUsers (term, usersList) {
    const termArray = term.split(' ');
    const foundUsers = usersList.filter(user => {
      let match = false;
      termArray.forEach(val => {
        const hasName = user.firstName && user.firstName.toLowerCase().includes(val.toLowerCase());
        const hasEmail = user.lastName && user.lastName.toLowerCase().includes(val.toLowerCase());
        const hasLogin = user.city && user.city.toLowerCase().includes(val.toLowerCase());
        const hasLocation = user.country && user.country.toLowerCase().includes(val.toLowerCase());

        match = match || hasName || hasEmail || hasLogin || hasLocation;
      });
      return match;
    });

    return foundUsers;
  }
}
