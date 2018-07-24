import {Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {EmojiModel} from '../../models/emoji.model';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-emojis-data',
  templateUrl: './emojis-data.component.html',
  styleUrls: ['./emojis-data.component.styl']
})
export class EmojisDataComponent implements OnInit {
  @Input() emojis: EmojiModel[] = [];
  @ContentChild(TemplateRef) templateRef: TemplateRef<EmojiModel>;
  cols = ['name', 'url', 'preview', 'actions'];
  pageNumber = 0;
  pageSize = 10;

  get pagedEmojis() {
    let start = this.pageNumber * this.pageSize;
    return this.emojis.slice(start, start + this.pageSize);
  }

  page(p: PageEvent) {
    this.pageSize = p.pageSize;
    this.pageNumber = p.pageIndex;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
