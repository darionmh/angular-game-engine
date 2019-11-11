import {Injectable} from '@angular/core';
import {OnCollide} from './collidable/on-collide.interface';
import {Bounds} from './model/Bounds';
import {Vector2} from './model/Vector2';
import {Edge} from './model/Edge';

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

      const collisionPoints: Vector2[] = [];
      let fromCollidable = false;
      for (let i = 0; i < 4 && collisionPoints.length < 2; i++) {
        if (other.getBounds().containsPoint(currCorners[i])) {
          collisionPoints.push(currCorners[i]);
          if (collisionPoints.length >= 2) {
            fromCollidable = true;
          }
        }
      }


      for (let i = 0; i < 4 && collisionPoints.length < 2; i++) {
        if (bounds.containsPoint(otherCorners[i])) {
          collisionPoints.push(otherCorners[i]);
        }
      }

      if (collisionPoints.length >= 2) {
        let collisionEdge: Edge;
        const collisionPoint1 = collisionPoints[0];
        const collisionPoint2 = collisionPoints[1];
        if (collisionPoint1.x >= collisionPoint2.x * 0.9 && collisionPoint1.x <= collisionPoint2.x * 1.1) {
          // vertical
          if (collisionPoint1.y <= collisionPoint2.y) {
            collisionEdge = new Edge(collisionPoint1, collisionPoint2);
          } else {
            collisionEdge = new Edge(collisionPoint2, collisionPoint1);
          }
        } else if (collisionPoint1.y >= collisionPoint2.y * 0.9 && collisionPoint1.y <= collisionPoint2.y * 1.1) {
          // horizontal
          if (collisionPoint1.x <= collisionPoint2.x) {
            collisionEdge = new Edge(collisionPoint1, collisionPoint2);
          } else {
            collisionEdge = new Edge(collisionPoint2, collisionPoint1);
          }
        }

        return {
          collidedWith: other,
          collisionEdge,
          fromCollidable
        };
      }

      return null;
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
  collisionEdge: Edge;
  fromCollidable: boolean;
}
