import {Component, OnInit} from '@angular/core';
import {OnCollide, Tags} from '../collidable/collidable.interface';
import {CollisionService} from '../collision.service';
import {SpriteComponent} from '../sprite/sprite.component';

@Component({
  selector: 'app-bad-sprite',
  templateUrl: './bad-sprite.component.html',
  styleUrls: ['./bad-sprite.component.scss']
})
export class BadSpriteComponent extends SpriteComponent implements OnCollide, OnInit {

  tag: string = Tags.Enemy;
  public styleColor = 'red';

  constructor(protected collisionService: CollisionService) {
    super();
  }

  private deregister: () => void;

  ngOnInit() {
    super.ngOnInit();
    this.deregister = this.collisionService.register(this);
  }

  onCollide(tag: string): void {
    if (tag === Tags.Player) {
      console.log('hit a player');
    }
  }

}
