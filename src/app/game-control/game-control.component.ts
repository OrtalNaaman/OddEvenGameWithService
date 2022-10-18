import { Component, OnInit } from '@angular/core';
import { OddEvenArraysService } from '../odd-even-arrays.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  constructor(private gameService: OddEvenArraysService) {}

  ngOnInit(): void {}
  onClick() {
    var rand = Math.floor(Math.random() * 10);
    this.gameService.getNewNumber(rand);
  }
}
