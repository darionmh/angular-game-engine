import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadSpriteComponent } from './bad-sprite.component';

describe('BadSpriteComponent', () => {
  let component: BadSpriteComponent;
  let fixture: ComponentFixture<BadSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
