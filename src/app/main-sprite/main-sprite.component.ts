import {Component, OnInit} from '@angular/core';
import {ControllableSpriteComponent} from '../controllable-sprite/controllable-sprite.component';
import {CollisionService} from '../collision.service';
import {OnCollide, Tags} from '../collidable/on-collide.interface';
import {Vector2} from '../model/Vector2';

@Component({
  selector: 'app-main-sprite',
  templateUrl: './main-sprite.component.html',
  styleUrls: ['./main-sprite.component.scss']
})
export class MainSpriteComponent extends ControllableSpriteComponent implements OnCollide, OnInit {

  tag: string = Tags.Player;
  public styleColor = 'green';

  constructor(protected collisionService: CollisionService) {
    super();
    this.onMove = this.onMove.bind(this);
    this.speed = 2;
  }

  private deregister: () => void;

  ngOnInit() {
    super.ngOnInit();
    this.deregister = this.collisionService.register(this);
  }

  onCollide(tag: string): void {
    if (tag === Tags.Enemy) {
      console.log('hit an enemy');
    }
  }

  onMove() {
    super.onMove();
  }

  shouldMove(directionVector: Vector2): boolean {
    const collisionEvent = this.collisionService.checkForCollision(this);
    if (!collisionEvent || !collisionEvent.collisionEdge) {
      return true;
    } else {
      let vector2;
      if (collisionEvent.fromCollidable) {
        vector2 = directionVector.adjustToBound(collisionEvent.collisionEdge.edgeToVector2().multiplyVector(-this.speed));
      } else {
        vector2 = directionVector.adjustToBound(collisionEvent.collisionEdge.edgeToVector2().multiplyVector(this.speed));
      }
      console.log(directionVector, collisionEvent.collisionEdge.edgeToVector2().multiplyVector(this.speed), vector2.nonZero());
      return vector2.nonZero();
    }
  }
}
