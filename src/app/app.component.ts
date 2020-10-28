import { GameService } from './game/game.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hangman';

  test:Observable<Array<{answer:string}>>; 
  
  constructor(private gameService: GameService){
    this.test = this.gameService.getAnswerList();    
  }
}
