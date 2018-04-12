import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RaceService {

  constructor() { }

  list(): Array<RaceModel> {

      return [
        {name: 'Lyon'},
        {name: 'Los Angeles'},
        {name: 'Sydney'},
        {name: 'Tokyo'},
        {name: 'Casablanca'}
      ];

  }

}
