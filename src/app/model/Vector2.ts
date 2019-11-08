export class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public addVector2(other: Vector2): void {
    this.x += other.x;
    this.y += other.y;
  }
}
