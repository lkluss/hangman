import { Component, Input, OnInit } from '@angular/core';
import { faLaughSquint, faGrin, faSmile, faFrown, faMeh, faFlushed, faDizzy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.scss']
})
export class HangmanDisplayComponent {

  @Input() errorLevel: number;

  constructor() { }

  /**
   * Set icon according to error level
   */
  getIcon(){
    switch(this.errorLevel){
      case 0: {
         return faLaughSquint;
      }
      case 1: {
        return faGrin;
      }
      case 2: {
        return faSmile;
      }
      case 3: {
        return faMeh;
      }
      case 4: {
        return faFrown;
      }
      case 5:{
        return faFlushed;
      }
      case 6:{
        return faDizzy;
      }
      default: return faLaughSquint;
    }
  }
}
