import {Injectable} from '@angular/core';
import {EmojiModel, EmojiStatus} from '../models/emoji.model';
import {HttpClient} from '@angular/common/http';


export const LOCAL_STORAGE_KEY = 'emojis';
const DRIVER = localStorage; // sessionStorage

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  private readonly storage;
  public emojis: EmojiModel[] = [];
  public search = '';

  constructor(private http: HttpClient) {
    this.storage = JSON.parse(DRIVER.getItem(LOCAL_STORAGE_KEY) || '{}');
  }

  get filterEmojis() {
    return this.emojis.filter(e => e.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  async getEmojis(): Promise<EmojiModel[]> {
    let data = await this.http.get('https://api.github.com/emojis').toPromise();
    // let data = await this.http.get('/api/emojis').toPromise(); // todo: REMOVE IT!!!!
    this.emojis = this.load(
      Object
        .keys(data)
        .map(name => new EmojiModel({name, url: data[name]}))
    );
    return this.emojis;
  }

  load(emojis: EmojiModel[]) {
    emojis.forEach(e => {
      if (!this.storage[e.name]) {
        return;
      }
      e.status = this.storage[e.name];
    });
    return emojis;
  }

  save(emoji: EmojiModel) {
    if (emoji.status === EmojiStatus.Default) {
      delete this.storage[emoji.name];
    } else {
      this.storage[emoji.name] = emoji.status;
    }
    DRIVER.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.storage));
  }
}
