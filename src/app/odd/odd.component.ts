import { Component, OnInit } from '@angular/core';
import { OddEvenArraysService } from '../odd-even-arrays.service';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  numbers: number[] = [];

  constructor(private gameService: OddEvenArraysService) {}

  ngOnInit(): void {
    this.numbers = this.gameService.oddNumbers;
  }
}
