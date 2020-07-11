import {
  Component,
  OnInit,
  Input,
  Output,
  HostListener,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() value: string;
  @Output('playerClick') click = new EventEmitter<string>();
  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
  constructor() {}

  ngOnInit(): void {}
}
