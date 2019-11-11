import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSpriteComponent } from './main-sprite.component';

describe('MainSpriteComponent', () => {
  let component: MainSpriteComponent;
  let fixture: ComponentFixture<MainSpriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSpriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSpriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
