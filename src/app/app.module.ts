import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BoardComponent } from '../pages/board/board.component';
import { CellComponent } from '../pages/cell/cell.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  declarations: [AppComponent, BoardComponent, CellComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
