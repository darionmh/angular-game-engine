import {Component, HostListener, Input, OnInit} from '@angular/core';
import {SpriteComponent} from '../sprite/sprite.component';
import {Vector2} from '../model/Vector2';
import {OnCollide} from '../collidable/on-collide.interface';

@Component({
  selector: 'app-controllable-sprite',
  templateUrl: '../sprite/sprite.component.html',
  styleUrls: ['../sprite/sprite.component.scss']
})
export class ControllableSpriteComponent extends SpriteComponent implements OnInit {

  protected nextPosition: Vector2;
  @Input() speed = 1;

  constructor() {
    super();
    this.move = this.move.bind(this);
    this.onMove = this.onMove.bind(this);
    this.shouldMove = this.shouldMove.bind(this);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  @HostListener('window:keydown.w', ['$event'])
  onKeydownW(event: KeyboardEvent): void {
    console.log('W');
    this.move(new Vector2(0, -this.speed));
  }

  @HostListener('window:keydown.a', ['$event'])
  onKeydownA(event: KeyboardEvent): void {
    console.log('A');
    this.move(new Vector2(-this.speed, 0));
  }

  @HostListener('window:keydown.s', ['$event'])
  onKeydownS(event: KeyboardEvent): void {
    console.log('S');
    this.move(new Vector2(0, this.speed));
  }

  @HostListener('window:keydown.d', ['$event'])
  onKeydownD(event: KeyboardEvent): void {
    console.log('D');
    this.move(new Vector2(this.speed, 0));
  }

  move(directionVector: Vector2) {
    this.nextPosition = this.position.addVector2(directionVector);
    if (this.shouldMove(directionVector)) {
      this.adjustPosition(directionVector);
      this.onMove();
    }
  }

  shouldMove(directionVector: Vector2) {
    return true;
  }

  onMove() {
    return;
  }
}
