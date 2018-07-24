import {Component, OnInit} from '@angular/core';
import {EmojiModel, EmojiStatus} from '../../models/emoji.model';
import {EmojiService} from '../../services/emoji.service';

@Component({
  selector: 'app-emojis-favorite',
  templateUrl: './emojis-favorite.component.html',
  styleUrls: ['./emojis-favorite.component.styl']
})
export class EmojisFavoriteComponent implements OnInit {

  constructor(private service: EmojiService) {
  }

  get emojis() {
    return this.service.filterEmojis.filter(e => e.status === EmojiStatus.Favorite);
  }

  clickDelete(emoji: EmojiModel) {
    emoji.status = EmojiStatus.Default;
    this.service.save(emoji);
  }

  ngOnInit() {
  }

}
