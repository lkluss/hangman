import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GameRoutingModule } from './game-routing.module';
import { GameService } from './game.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerComponent } from './game-container/game-container.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { HangmanDisplayComponent } from './game-play/hangman-display/hangman-display.component';
import { LetterSelectionComponent } from './game-play/letter-selection/letter-selection.component';
import { GameFailedComponent } from './game-play/game-failed/game-failed.component';
import { GameWonComponent } from './game-play/game-won/game-won.component';


@NgModule({
  declarations: [
    GameContainerComponent, 
    GamePlayComponent, 
    HangmanDisplayComponent, 
    LetterSelectionComponent, 
    GameFailedComponent, 
    GameWonComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
