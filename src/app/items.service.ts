import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  // items$ = of(DATA).pipe(delay(1000));
  getItems() {
    return of(DATA).pipe(delay(1000));
  }
}

const DATA = [
  {
    id: 2080,
    name: 'Arsenal',
  },
  {
    id: 2074,
    name: 'Aston Villa',
  },
  {
    id: 2114,
    name: 'Brighton',
  },
  {
    id: 2092,
    name: 'Burnley',
  },
  {
    id: 2071,
    name: 'Chelsea',
  },
  {
    id: 2099,
    name: 'Crystal Palace',
  },
  {
    id: 2076,
    name: 'Everton',
  },
  {
    id: 2075,
    name: 'Fulham',
  },
  {
    id: 2121,
    name: 'Leeds United',
  },
  {
    id: 2122,
    name: 'Leicester',
  },
  {
    id: 2089,
    name: 'Liverpool',
  },
  {
    id: 2073,
    name: 'Man City',
  },
  {
    id: 2072,
    name: 'Man Utd',
  },
  {
    id: 2082,
    name: 'Newcastle',
  },
  {
    id: 2109,
    name: 'Sheffield United',
  },
  {
    id: 2110,
    name: 'Southampton',
  },
  {
    id: 2084,
    name: 'Tottenham',
  },
  {
    id: 2087,
    name: 'West Bromwich Albion',
  },
  {
    id: 2086,
    name: 'West ham',
  },
  {
    id: 2113,
    name: 'Wolves',
  },
];
