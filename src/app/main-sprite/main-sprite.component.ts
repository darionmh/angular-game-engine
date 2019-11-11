import {Component, OnInit} from '@angular/core';
import {ControllableSpriteComponent} from '../controllable-sprite/controllable-sprite.component';
import {CollisionService} from '../collision.service';
import {OnCollide, Tags} from '../collidable/collidable.interface';

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
    this.collisionService.checkForCollision(this);
  }
}
