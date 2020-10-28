import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-failed',
  templateUrl: './game-failed.component.html',
  styleUrls: ['./game-failed.component.scss']
})
export class GameFailedComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  playAgain(){
    this.router.navigate(["play"]);
  }
}
