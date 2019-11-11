import {TestBed} from '@angular/core/testing';

import {Bounds} from './Bounds';
import {Vector2} from './Vector2';

describe('Bounds', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const position: Vector2 = new Vector2(0, 0);
    const height = 50;
    const width = 50;
    const bounds: Bounds = new Bounds(position, height, width);
    expect(bounds).toBeTruthy();
  });

  it('should contain', () => {
    const position: Vector2 = new Vector2(0, 0);
    const position2: Vector2 = new Vector2(25, 25);
    const height = 50;
    const width = 50;
    const bounds: Bounds = new Bounds(position, height, width);
    const bounds2: Bounds = new Bounds(position2, height, width);

    expect(bounds).toBeTruthy();
    expect(bounds.containsPoint(position2)).toBeTruthy();
    expect(bounds2.containsPoint(position)).toBeFalsy();
  });
});
