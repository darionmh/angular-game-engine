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
    this.getCorners = this.getCorners.bind(this);
    this.getCenter = this.getCenter.bind(this);
  }

  ngOnInit() {
    this.position = new Vector2(this.offsetX, this.offsetY);
    this.draw();
  }

  public draw(): void {
    console.log(this);
    this.styleHeight = `${this.height}px`;
    this.styleWidth = `${this.width}px`;
    this.styleTop = `${this.position.y}px`;
    this.styleLeft = `${this.position.x}px`;
  }

  public adjustPosition(changeVector2: Vector2): void {
    this.position.adjust(changeVector2);
    this.draw();
  }

  public getBounds(): Bounds {
    return new Bounds(this.position, this.height, this.width);
  }

  public getPosition(): Vector2 {
    return this.position;
  }

  public getCorners(): Vector2[] {
    const corners = [];
    corners.push(this.position);
    corners.push(this.position.addVector2(new Vector2(this.width, 0)));
    corners.push(this.position.addVector2(new Vector2(0, this.height)));
    corners.push(this.position.addVector2(new Vector2(this.width, this.height)));

    return corners;
  }

  public getCenter(): Vector2 {
    return this.position.addVector2(new Vector2(this.width / 2, this.height / 2));
  }
}
