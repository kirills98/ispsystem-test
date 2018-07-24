import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmojiModel} from '../../models/emoji.model';

@Component({
  selector: 'app-emojis-button-restore',
  templateUrl: './emojis-button-restore.component.html',
  styleUrls: ['./emojis-button-restore.component.styl']
})
export class EmojisButtonRestoreComponent implements OnInit {
  @Input() emoji: EmojiModel = null;
  @Output() do = new EventEmitter<EmojiModel>();

  constructor() {
  }

  ngOnInit() {
  }

}
