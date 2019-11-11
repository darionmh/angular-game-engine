import {Vector2} from './Vector2';

export class Bounds {
  private readonly position: Vector2;
  private readonly height: number;
  private readonly width: number;

  constructor(position: Vector2, height: number, width: number) {
    this.position = position;
    this.height = height;
    this.width = width;
  }

  public containsPoint(point: Vector2): boolean {
    const minX = this.position.x;
    const maxX = this.position.x + this.width;
    const minY = this.position.y;
    const maxY = this.position.y + this.height;

    return point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY;
  }
}
