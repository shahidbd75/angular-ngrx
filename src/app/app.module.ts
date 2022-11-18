import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
