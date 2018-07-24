import {Component, OnInit} from '@angular/core';
import {MediaService} from '@angular/flex-layout';
import {EmojiService} from './services/emoji.service';
import {EmojiStatus} from './models/emoji.model';
import {ChildActivationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  loading = false;
  EmojiStatus = EmojiStatus;

  constructor(
    private media: MediaService,
    private service: EmojiService,
    private router: Router,
    private title: Title
  ) {
  }

  emojiCount(...statuses: EmojiStatus[]) {
    return this.service.emojis.filter(e => statuses.includes(e.status)).length;
  }

  get isXs() {
    return this.media.isActive('xs');
  }

  async updateEmojis() {
    this.loading = true;
    await this.service.getEmojis();
    this.loading = false;
  }

  onRouterChange(e) {
    if (!(e instanceof ChildActivationEnd)) {
      return;
    }
    this.title.setTitle(`${e.snapshot.firstChild.data.title} | ISPSystem Test`);
  }

  ngOnInit(): void {
    this.router.events.subscribe(this.onRouterChange.bind(this));
    this.updateEmojis();
  }
}
