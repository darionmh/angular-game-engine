import {TestBed} from '@angular/core/testing';

import {CollisionService} from './collision.service';
import {MainSpriteComponent} from './main-sprite/main-sprite.component';

describe('CollisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollisionService = TestBed.get(CollisionService);
    expect(service).toBeTruthy();
  });

  it('should have collision', () => {
    const service: CollisionService = TestBed.get(CollisionService);
    const collidable1: MainSpriteComponent = new MainSpriteComponent(service);
    collidable1.height = 50;
    collidable1.width = 50;
    collidable1.ngOnInit();

    const collidable2: MainSpriteComponent = new MainSpriteComponent(service);
    collidable2.height = 50;
    collidable2.width = 50;
    collidable2.offsetX = 25;
    collidable2.offsetY = 25;
    collidable2.ngOnInit();


    expect(collidable1).toBeTruthy();
    expect(collidable2).toBeTruthy();

    const collisionEvent = service.checkForCollision(collidable1);

    expect(service.checkForCollision(collidable1)).toBeTruthy();
    expect(service.checkForCollision(collidable2)).toBeTruthy();
  });

  it('should not have collision', () => {
    const service: CollisionService = TestBed.get(CollisionService);
    const collidable1: MainSpriteComponent = new MainSpriteComponent(service);
    collidable1.height = 50;
    collidable1.width = 50;
    collidable1.ngOnInit();

    const collidable2: MainSpriteComponent = new MainSpriteComponent(service);
    collidable2.height = 50;
    collidable2.width = 50;
    collidable2.offsetX = 100;
    collidable2.offsetY = 100;
    collidable2.ngOnInit();


    expect(collidable1).toBeTruthy();
    expect(collidable2).toBeTruthy();
    expect(service.checkForCollision(collidable1)).toBeFalsy();
    expect(service.checkForCollision(collidable2)).toBeFalsy();
  });
});
