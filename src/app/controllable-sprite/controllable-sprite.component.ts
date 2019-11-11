import {Component, HostListener, OnInit} from '@angular/core';
import {SpriteComponent} from '../sprite/sprite.component';
import {Vector2} from '../model/Vector2';
import {OnCollide} from '../collidable/collidable.interface';

@Component({
  selector: 'app-controllable-sprite',
  templateUrl: '../sprite/sprite.component.html',
  styleUrls: ['../sprite/sprite.component.scss']
})
export class ControllableSpriteComponent extends SpriteComponent implements OnInit {

  constructor() {
    super();
    this.onMove = this.onMove.bind(this);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  @HostListener('window:keydown.w', ['$event'])
  onKeydownW(event: KeyboardEvent): void {
    console.log('W');
    this.adjustPosition(new Vector2(0, -1));
    this.onMove();
  }

  @HostListener('window:keydown.a', ['$event'])
  onKeydownA(event: KeyboardEvent): void {
    console.log('A');
    this.adjustPosition(new Vector2(-1, 0));
    this.onMove();
  }

  @HostListener('window:keydown.s', ['$event'])
  onKeydownS(event: KeyboardEvent): void {
    console.log('S');
    this.adjustPosition(new Vector2(0, 1));
    this.onMove();
  }

  @HostListener('window:keydown.d', ['$event'])
  onKeydownD(event: KeyboardEvent): void {
    console.log('D');
    this.adjustPosition(new Vector2(1, 0));
    this.onMove();
  }

  onMove() {
    // do nothing by default;
  }
}
