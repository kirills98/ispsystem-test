import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmojiModel, EmojiStatus} from '../../models/emoji.model';

@Component({
  selector: 'app-emojis-button-favorite',
  templateUrl: './emojis-button-favorite.component.html',
  styleUrls: ['./emojis-button-favorite.component.styl']
})
export class EmojisButtonFavoriteComponent implements OnInit {
  EmojiStatus = EmojiStatus;
  @Input() emoji: EmojiModel = null;
  @Output() do = new EventEmitter<EmojiModel>();

  constructor() {
  }

  ngOnInit() {
  }

}
