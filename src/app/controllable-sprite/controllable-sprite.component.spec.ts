import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllableSpriteComponent } from './controllable-sprite.component';

describe('ControllableSpriteComponent', () => {
  let component: ControllableSpriteComponent;
  let fixture: ComponentFixture<ControllableSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllableSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllableSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
