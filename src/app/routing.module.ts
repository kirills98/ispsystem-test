import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmojisAllComponent} from './components/emojis-all/emojis-all.component';
import {EmojisFavoriteComponent} from './components/emojis-favorite/emojis-favorite.component';
import {EmojisDeletedComponent} from './components/emojis-deleted/emojis-deleted.component';

const Routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/all'},
  {path: 'all', component: EmojisAllComponent, data: {title: 'Все'}},
  {path: 'favorite', component: EmojisFavoriteComponent, data: {title: 'Любимые'}},
  {path: 'deleted', component: EmojisDeletedComponent, data: {title: 'Удаленные'}},
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
