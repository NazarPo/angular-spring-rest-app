import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { GuildModel } from '../guild.model';
import { HeroModel } from '../hero.model';

@Injectable({providedIn: 'root'})
export class TavernService {
  API_URL = 'http://localhost:8080/api';

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
  }

  getTaverns() {
    this.messageService.add('TavernService: fetched taverns');
    return this.httpClient.get(`${this.API_URL}/taverns`);
  }

  getTopTaverns() {
    this.messageService.add('TavernService: fetched TOP guilds');
    return this.httpClient.get(`${this.API_URL}/taverns/top`);
  }

  getTavern(id: number) {
    this.messageService.add(`TavernService: fetched tavern id=${id}`);
    return this.httpClient.get(`${this.API_URL}/taverns/${id}`);
  }

  deleteTavern(id: number) {
    this.messageService.add(`TavernService: deleted tavern with id=${id}`);
    return this.httpClient.delete(`${this.API_URL}/taverns/${id}`);
  }

  removeHeroFromTavern(id: number, heroId: number) {
    this.messageService.add(`TavernService: deleted hero with id =${heroId} from tavern with id=${id}`);
    return this.httpClient.delete(`${this.API_URL}/taverns/${id}/heroes/${heroId}`);
  }
}
