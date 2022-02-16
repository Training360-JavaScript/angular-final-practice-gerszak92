import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { EventEditorComponent } from './page/event-editor/event-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavigationComponent,
    EventEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
