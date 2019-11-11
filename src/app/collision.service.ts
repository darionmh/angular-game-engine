import {Injectable} from '@angular/core';
import {OnCollide} from './collidable/collidable.interface';
import {Bounds} from './model/Bounds';

@Injectable({
  providedIn: 'root'
})
export class CollisionService {

  private collidables: OnCollide[] = [];

  constructor() {
  }

  public checkForCollision(collidable: OnCollide): void {
    const bounds: Bounds = collidable.getBounds();
    console.log(collidable, bounds);

    for (const other of this.collidables) {
      if (other === collidable) {
        continue;
      }

      if (bounds.containsPoint(other.getPosition())) {
        collidable.onCollide(other.tag);
        return;
      }
    }
  }

  public register(collidable: OnCollide): () => void {

    this.collidables.push(collidable);

    return () => {
      this.collidables = this.collidables.filter(it => it !== collidable);
    };
  }
}
