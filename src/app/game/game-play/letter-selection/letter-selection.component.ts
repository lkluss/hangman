import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-selection',
  templateUrl: './letter-selection.component.html',
  styleUrls: ['./letter-selection.component.scss']
})
export class LetterSelectionComponent implements OnInit {

  @Input() word: string = "";
  @Input() spelledWord:[];

  letters = []; 

  constructor() {
  }

  ngOnInit(): void {
    this.resetLetters();
  }

  onSelectLetter(e){
    e.selected = !e.selected;
  }

  resetLetters(){
    this.letters = [
      {letter: 'a', selected: false } , 
      {letter: 'b', selected: false } , 
      {letter: 'c', selected: false } , 
      {letter: 'd', selected: false } , 
      {letter: 'e', selected: false } , 
      {letter: 'f', selected: false } , 
      {letter: 'g', selected: false } , 
      {letter: 'h', selected: false } , 
      {letter: 'i', selected: false } , 
      {letter: 'j', selected: false } , 
      {letter: 'k', selected: false } , 
      {letter: 'l', selected: false } , 
      {letter: 'm', selected: false } , 
      {letter: 'n', selected: false } , 
      {letter: 'o', selected: false } , 
      {letter: 'p', selected: false } , 
      {letter: 'q', selected: false } , 
      {letter: 'r', selected: false } ,
      {letter: 's', selected: false } , 
      {letter: 't', selected: false } , 
      {letter: 'u', selected: false } , 
      {letter: 'v', selected: false } , 
      {letter: 'w', selected: false } , 
      {letter: 'x', selected: false } , 
      {letter: 'y', selected: false } , 
      {letter: 'z', selected: false } 
  ];
  }

}
