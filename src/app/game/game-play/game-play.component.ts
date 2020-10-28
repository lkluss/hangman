import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  public word: string = '';
  public stage: number = 1;
  public timer: number = 0;
  public errors: number = 0;
  public spelledWord = [];
  private wordIndex= [];
  

  display;
  interval;

  private gameSubscription: Subscription;
  private words: Array<{answer:string}>;

  constructor(private gameS: GameService) {
    this.gameSubscription = this.gameS.getAnswerList().subscribe(words => {
      this.words = words;
      // Select first word
      this.selectWord();
      
    });
   
   }

  ngOnInit(): void {
    this.startTimer();
  }

  selectWord(){
    this.word = this.words[Math.floor(Math.random() * this.words.length)].answer;    
    // Reset errors for new word
    this.errors = 0;
    this.timer = 0;
    this.spellWord();
  }

  spellWord(){
    for (var i = 0; i < this.word.length; i++) {
      this.spelledWord.push({letter: this.word.charAt(i), detected: false});
    } 
  }

  /**
   * Timer functions
   */
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer === 0) {
        this.timer++;
      } else {
        this.timer++;
      }
      this.display=this.transform(this.timer);
    }, 1000);
  }
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + ':' + (value - minutes * 60);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

}
