import { environment } from './../../../../environments/environment.prod';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letter-selection',
  templateUrl: './letter-selection.component.html',
  styleUrls: ['./letter-selection.component.scss']
})
export class LetterSelectionComponent implements OnInit {
  // Listo of letters to display
  @Input() spelledWord:[{letter: string, detected: boolean}];
  // game paused flag
  @Input() gamePaused: boolean;
  @Output() noHits:EventEmitter<any> = new EventEmitter();
  @Output() stageWon: EventEmitter<any> = new EventEmitter();
  
  // List of english letters
  letters = []; 

  constructor() {
  }

  ngOnInit(): void {
    this.resetLetters();
  }

/**
 * Change selected letter visibility
 * Chceck if letter was discovered or if was it a miss
 * If a letter was found, chcekc if the stage was won
 * @param e 
 */
  onSelectLetter(e){
    if(!this.gamePaused){
      e.selected = !e.selected;
      let hit = 0;
      this.spelledWord.forEach(sp => {
        if(sp.letter === e.letter){
          hit++;
          sp.detected = true;
        }
      });

      let detected = this.spelledWord.filter(e => e.detected === true);

      if(hit === 0) {
        this.noHits.next(null);
      }else if(detected.length == this.spelledWord.length){
        this.stageWon.next(null);
        this.resetLetters();
      }    
    }    
  }

  /**
   * Reset letters so they can be used again
   */
  resetLetters(){
    this.letters = [];
    for (var i = 0; i < environment.letters.length; i++) {
      this.letters.push({letter: environment.letters.charAt(i), selected: false});
    }     
  }
}
