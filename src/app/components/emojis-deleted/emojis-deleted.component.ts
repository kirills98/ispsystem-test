import {Component, OnInit} from '@angular/core';
import {EmojiModel, EmojiStatus} from '../../models/emoji.model';
import {EmojiService} from '../../services/emoji.service';

@Component({
  selector: 'app-emojis-deleted',
  templateUrl: './emojis-deleted.component.html',
  styleUrls: ['./emojis-deleted.component.styl']
})
export class EmojisDeletedComponent implements OnInit {

  constructor(private service: EmojiService) {
  }

  get emojis() {
    return this.service.filterEmojis.filter(e => e.status === EmojiStatus.Deleted);
  }

  clickRestore(emoji: EmojiModel) {
    emoji.status = EmojiStatus.Default;
    this.service.save(emoji);
  }

  ngOnInit() {
  }

}
