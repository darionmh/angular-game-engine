import {Vector2} from './Vector2';

export class Edge {
  public a: Vector2;
  public b: Vector2;

  constructor(a: Vector2, b: Vector2) {
    this.a = a;
    this.b = b;
  }

  public getOrientation(): number {
    const a = this.a;
    const b = this.b;

    if (a.x === b.x && a.y >= b.y) {
      return Orientation.LEFT;
    } else if (a.x === b.x && a.y <= b.y) {
      return Orientation.RIGHT;
    } else if (a.y === b.y && a.x <= b.x) {
      return Orientation.UP;
    } else {
      return Orientation.DOWN;
    }
  }

  public edgeToVector2(): Vector2 {
    switch (this.getOrientation()) {
      case Orientation.LEFT:
        return new Vector2(-1, 0);
      case Orientation.UP:
        return new Vector2(0, -1);
      case Orientation.RIGHT:
        return new Vector2(1, 0);
      case Orientation.DOWN:
        return new Vector2(0, 1);
    }

    return null;
  }
}

export const Orientation = {
  LEFT: 0, UP: 1, RIGHT: 2, DOWN: 3
};
