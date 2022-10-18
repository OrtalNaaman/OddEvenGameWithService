import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OddEvenArraysService {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() {}

  getNewNumber(firedNumber: number) {
    firedNumber % 2 === 0
      ? this.evenNumbers.push(firedNumber)
      : this.oddNumbers.push(firedNumber);
  }
}
