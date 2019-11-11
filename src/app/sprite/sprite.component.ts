import {Component, Input, OnInit} from '@angular/core';
import {Vector2} from '../model/Vector2';
import {Bounds} from '../model/Bounds';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;

  @Input() offsetX = 0;
  @Input() offsetY = 0;

  public styleHeight: string;
  public styleWidth: string;
  public styleTop: string;
  public styleLeft: string;
  public styleColor = 'blue';

  protected position: Vector2;

  constructor() {
    this.draw = this.draw.bind(this);
    this.adjustPosition = this.adjustPosition.bind(this);
    this.getBounds = this.getBounds.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  ngOnInit() {
    this.position = new Vector2(0, 0);
    this.draw();
  }

  public draw(): void {
    console.log(this);
    this.styleHeight = `${this.height}px`;
    this.styleWidth = `${this.width}px`;
    this.styleTop = `${this.position.y + this.offsetX}px`;
    this.styleLeft = `${this.position.x + this.offsetY}px`;
  }

  public adjustPosition(changeVector2: Vector2): void {
    this.position.addVector2(changeVector2);
    this.draw();
  }

  public getBounds(): Bounds {
    return new Bounds(this.position, this.height, this.width);
  }

  public getPosition(): Vector2 {
    return this.position;
  }
}
