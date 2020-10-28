import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-won',
  templateUrl: './game-won.component.html',
  styleUrls: ['./game-won.component.scss']
})
export class GameWonComponent implements OnInit {

  constructor(public router: Router) { }
  time;

  ngOnInit(): void {
    this.time = localStorage.getItem('time');
  }

  playAgain(){
    this.router.navigate(["play"]);
  }

}
