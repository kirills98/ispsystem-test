import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MaterialModule} from './material.module';
import {RoutingModule} from './routing.module';
import {FormsModule} from '@angular/forms';
import {EmojisAllComponent} from './components/emojis-all/emojis-all.component';
import {EmojisFavoriteComponent} from './components/emojis-favorite/emojis-favorite.component';
import {EmojisDeletedComponent} from './components/emojis-deleted/emojis-deleted.component';
import {EmojisDataComponent} from './components/emojis-data/emojis-data.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {EmojisButtonFavoriteComponent} from './components/emojis-button-favorite/emojis-button-favorite.component';
import {EmojisButtonDeleteComponent} from './components/emojis-button-delete/emojis-button-delete.component';
import {EmojisButtonRestoreComponent} from './components/emojis-button-restore/emojis-button-restore.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EmojisAllComponent,
    EmojisFavoriteComponent,
    EmojisDeletedComponent,
    EmojisDataComponent,
    EmojisButtonFavoriteComponent,
    EmojisButtonDeleteComponent,
    EmojisButtonRestoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RoutingModule,
    FormsModule,

    // todo: REMOVE IT!!!!!!!!
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {dataEncapsulation: false}
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
