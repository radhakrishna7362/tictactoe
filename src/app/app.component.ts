import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tictactie';

  player1: string = '';
  player2: string = '';
  ngOnInit(): void {
    localStorage.clear();
  }
  submitName() {
    localStorage.setItem('Player1', this.player1);
    localStorage.setItem('Player2', this.player2);
  }
}
