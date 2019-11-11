export class Vector2 {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public adjust(other: Vector2): void {
    this.x += other.x;
    this.y += other.y;
  }

  public addVector2(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  public subtractVector2(other: Vector2): Vector2 {
    return new Vector2(this.x - other.x, this.y - other.y);
  }

  public adjustToBound(other: Vector2) {
    let x = this.x;
    let y = this.y;
    if (x !== 0) {
      x -= other.x;
    }

    if (y !== 0) {
      y -= other.y;
    }

    return new Vector2(x, y);
  }

  public nonZero(): boolean {
    return this.x !== 0 || this.y !== 0;
  }

  public toAngle(): number {
    return Math.atan(this.y / this.x) * 180 / Math.PI;
  }

  public multiplyVector(factor: number): Vector2 {
    return new Vector2(this.x * factor, this.y * factor);
  }
}
