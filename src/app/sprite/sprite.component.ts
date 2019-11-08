import {Component, Input, OnInit} from '@angular/core';
import {Vector2} from '../model/Vector2';
import {KeyboardService} from '../keyboard.service';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;

  public styleHeight: string;
  public styleWidth: string;
  public styleTop: string;
  public styleLeft: string;
  public styleColor = 'blue';

  protected position: Vector2;

  constructor() {
    this.draw = this.draw.bind(this);
    this.position = new Vector2(0, 0);
  }

  ngOnInit() {
    this.draw();
  }

  public draw(): void {
    console.log(this);
    this.styleHeight = `${this.height}px`;
    this.styleWidth = `${this.width}px`;
    this.styleTop = `${this.position.y}px`;
    this.styleLeft = `${this.position.x}px`;
  }

}
