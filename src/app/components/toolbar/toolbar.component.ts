import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmojiService} from '../../services/emoji.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.styl']
})
export class ToolbarComponent implements OnInit {
  constructor(
    public service: EmojiService,
    public route: ActivatedRoute
  ) {
  }

  @Output() menuCLick = new EventEmitter();

  get title() {
    return this.route.firstChild.snapshot.data.title;
  }

  ngOnInit() {
  }

}
