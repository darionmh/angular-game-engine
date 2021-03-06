import {Bounds} from '../model/Bounds';
import {Vector2} from '../model/Vector2';

export interface OnCollide {
  tag: string;

  onCollide(tag: string): void;
  getBounds(): Bounds;
  getCorners(): Vector2[];
  getCenter(): Vector2;
}

export const Tags = {
  Player: 'PLAYER',
  Enemy: 'ENEMY',
  Entity: 'ENTITY',
  Wall: 'WALL'
};
