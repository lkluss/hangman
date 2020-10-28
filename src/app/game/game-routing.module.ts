import { GamePlayComponent } from './game-play/game-play.component';
import { GameContainerComponent } from './game-container/game-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: GameContainerComponent },
    { path: 'play', component: GamePlayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
