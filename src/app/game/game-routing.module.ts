import { GameWonComponent } from './game-play/game-won/game-won.component';
import { GameFailedComponent } from './game-play/game-failed/game-failed.component';
import { GamePlayComponent } from './game-play/game-play.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: GameContainerComponent },
    { path: 'play', component: GamePlayComponent},
    { path: 'game-over', component: GameFailedComponent},
    { path: 'game-won', component: GameWonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
