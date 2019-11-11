import {Injectable} from '@angular/core';
import {OnCollide} from './collidable/on-collide.interface';
import {Bounds} from './model/Bounds';
import {Vector2} from './model/Vector2';

@Injectable({
  providedIn: 'root'
})
export class CollisionService {

  private collidables: OnCollide[] = [];

  constructor() {
  }

  public checkForCollision(collidable: OnCollide): CollisionEvent {
    const bounds: Bounds = collidable.getBounds();
    console.log(collidable, bounds);

    for (const other of this.collidables) {
      if (other === collidable) {
        continue;
      }

      const otherCorners = other.getCorners();
      const currCorners = collidable.getCorners();

      for (let i = 0; i < 4; i++) {
        let collisionPoint: Vector2;

        if (bounds.containsPoint(otherCorners[i])) {
          collisionPoint = otherCorners[i];
        } else if (other.getBounds().containsPoint(currCorners[i])) {
          collisionPoint = currCorners[i];
        }

        if (collisionPoint) {
          collidable.onCollide(other.tag);
          other.onCollide(collidable.tag);
          const collisionVector = other.getCenter().subtractVector2(collidable.getCenter());
          return {
            collidedWith: other,
            collisionVector: this.minimizeVector(collisionVector),
            collisionAngle: collisionVector.toAngle()
          };
        }
      }
    }

    return null;
  }

  private minimizeVector(vector: Vector2): Vector2 {
    let x = vector.x;
    let y = vector.y;

    x = x !== 0 ? x > 0 ? Math.min(1, x) : Math.max(-1, x) : 0;
    y = y !== 0 ? y > 0 ? Math.min(1, y) : Math.max(-1, y) : 0;

    return new Vector2(x, y);
  }

  public register(collidable: OnCollide): () => void {

    this.collidables.push(collidable);

    return () => {
      this.collidables = this.collidables.filter(it => it !== collidable);
    };
  }
}

export interface CollisionEvent {
  collidedWith: OnCollide;
  collisionVector: Vector2;
  collisionAngle: number;
}
