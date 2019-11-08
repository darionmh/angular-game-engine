import {Component, HostListener, OnInit} from '@angular/core';
import {SpriteComponent} from '../sprite/sprite.component';
import {KeyboardService, KEYS} from '../keyboard.service';
import {Vector2} from '../model/Vector2';

@Component({
  selector: 'app-controllable-sprite',
  templateUrl: './controllable-sprite.component.html',
  styleUrls: ['./controllable-sprite.component.scss']
})
export class ControllableSpriteComponent extends SpriteComponent implements OnInit {

  constructor() {
    super();
    this.moveUp = this.moveUp.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  ngOnInit() {
    this.draw();
    // this.keyboardService.registerEvent(KEYS.W, this.moveUp);
    // this.keyboardService.registerEvent(KEYS.A, this.moveLeft);
    // this.keyboardService.registerEvent(KEYS.S, this.moveDown);
    // this.keyboardService.registerEvent(KEYS.D, this.moveRight);
  }

  private moveUp(): void {
    this.position.addVector2(new Vector2(0, -1));
    this.draw();
  }

  private moveDown(): void {
    this.position.addVector2(new Vector2(0, 1));
    this.draw();
  }

  private moveLeft(): void {
    this.position.addVector2(new Vector2(-1, 0));
    this.draw();
  }

  private moveRight(): void {
    this.position.addVector2(new Vector2(1, 0));
    this.draw();
  }

  @HostListener('window:keydown.w', ['$event'])
  onKeydownW(event: KeyboardEvent): void {
    console.log('W');
    this.moveUp();
  }

  @HostListener('window:keydown.a', ['$event'])
  onKeydownA(event: KeyboardEvent): void {
    console.log('A');
    this.moveLeft();
  }

  @HostListener('window:keydown.s', ['$event'])
  onKeydownS(event: KeyboardEvent): void {
    console.log('S');
    this.moveDown();
  }

  @HostListener('window:keydown.d', ['$event'])
  onKeydownD(event: KeyboardEvent): void {
    console.log('D');
    this.moveRight();
  }
}
