import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmojiModel} from '../../models/emoji.model';

@Component({
  selector: 'app-emojis-button-delete',
  templateUrl: './emojis-button-delete.component.html',
  styleUrls: ['./emojis-button-delete.component.styl']
})
export class EmojisButtonDeleteComponent implements OnInit {
  @Input() emoji: EmojiModel = null;
  @Output() do = new EventEmitter<EmojiModel>();

  constructor() {
  }

  ngOnInit() {
  }

}
