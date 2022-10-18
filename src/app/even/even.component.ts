import { Component, OnInit } from '@angular/core';
import { OddEvenArraysService } from '../odd-even-arrays.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  numbers: number[] = [];

  constructor(private gameService: OddEvenArraysService) {}

  ngOnInit(): void {
    this.numbers = this.gameService.evenNumbers;
  }
}
