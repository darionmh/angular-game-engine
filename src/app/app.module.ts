import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpriteComponent } from './sprite/sprite.component';
import { ControllableSpriteComponent } from './controllable-sprite/controllable-sprite.component';
import { MainSpriteComponent } from './main-sprite/main-sprite.component';
import { BadSpriteComponent } from './bad-sprite/bad-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    SpriteComponent,
    ControllableSpriteComponent,
    MainSpriteComponent,
    BadSpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
