import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpriteComponent } from './sprite/sprite.component';
import { ControllableSpriteComponent } from './controllable-sprite/controllable-sprite.component';

@NgModule({
  declarations: [
    AppComponent,
    SpriteComponent,
    ControllableSpriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
