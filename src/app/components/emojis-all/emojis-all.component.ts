import {Component, OnInit} from '@angular/core';
import {EmojiService} from '../../services/emoji.service';
import {EmojiModel, EmojiStatus} from '../../models/emoji.model';

@Component({
  selector: 'app-emojis-all',
  templateUrl: './emojis-all.component.html',
  styleUrls: ['./emojis-all.component.styl']
})
export class EmojisAllComponent implements OnInit {

  constructor(private service: EmojiService) {
  }

  get emojis() {
    return this.service.filterEmojis.filter(e => e.status !== EmojiStatus.Deleted);
  }

  clickFavorite(emoji: EmojiModel) {
    emoji.status = emoji.status === EmojiStatus.Favorite ? EmojiStatus.Default : EmojiStatus.Favorite;
    this.service.save(emoji);
  }

  clickDelete(emoji: EmojiModel) {
    emoji.status = EmojiStatus.Deleted;
    this.service.save(emoji);
  }

  ngOnInit() {
  }

}
