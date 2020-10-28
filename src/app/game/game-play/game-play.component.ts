import { environment } from './../../../environments/environment.prod';
import { GameService } from './../game.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit, OnDestroy {

  public word: string = '';
  public spelledWord = [];
  public stage: number = 0;  
  public errors: number = 0;
  
  public gamePaused: boolean = false;

  private timer: number = 0;
  public display;
  private interval;

  private gameSubscription: Subscription;
  public words: Array<{answer:string}>;

  constructor(private gameS: GameService, public router: Router) {}

   ngOnInit(){
     // Get word list
    this.gameSubscription = this.gameS.getAnswerList().subscribe(words => {
      this.words = words;
      // Select first word
      this.startStage();      
    }); 
   }

   ngOnDestroy(){
     this.gameSubscription.unsubscribe();
   }

   /**
    * Start next stage of the game
    */
   startStage(){ 
     this.stage++;     
     this.selectWord();
     this.startTimer();
     this.errors = 0;    
   }
   
  /**
   * Select next word, reduce possible words so they will not occur more than once
   */
  selectWord(){
    this.word = this.words[Math.floor(Math.random() * this.words.length)].answer; 
    this.words = this.words.filter(e => e.answer !== this.word);

    this.spellWord();
  }

  spellWord(){
    this.spelledWord = [];   
    for (var i = 0; i < this.word.length; i++) {
      this.spelledWord.push({letter: this.word.charAt(i), detected: false});
    } 
  }

  onNoHit(){
    this.errors++;
    if(this.errors === 6){
      this.pauseTimer();
      this.router.navigate(["game-over"]);
    }
  }

  stageWon(){
    this.pauseTimer();  
    if(this.stage === environment.maxStages){
      localStorage.setItem('time', this.display);
      this.router.navigate(['game-won']);
    }
  }

  /**
   * Timer functions
   */
  startTimer() {
    this.interval = setInterval(() => {
      this.timer++;
      this.display=this.transform(this.timer);
    }, 1000);
    this.gamePaused = false;
  }
  transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes + 'm ' + (value - minutes * 60) + 's';
  }
  pauseTimer() {
    clearInterval(this.interval);
    this.gamePaused = true;
  } 

}
