import { Injectable } from '@angular/core';
import { MessageService } from '../messages/message.service';
import { HttpClient } from '@angular/common/http';
import { GuildModel } from '../guild.model';
import { HeroModel } from '../hero.model';

@Injectable({providedIn: 'root'})
export class GuildService {
  API_URL = 'http://localhost:8080/api';

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
  }

  getGuilds() {
    this.messageService.add('GuildService: fetched guilds');
    return this.httpClient.get(`${this.API_URL}/guilds`);
  }

  getTopGuilds() {
    this.messageService.add('GuildService: fetched TOP guilds');
    return this.httpClient.get(`${this.API_URL}/guilds/top`);
  }

  getGuild(id: number) {
    this.messageService.add(`GuildService: fetched guild id=${id}`);
    return this.httpClient.get(`${this.API_URL}/guilds/${id}`);
  }

  createGuild(guild: GuildModel) {
    this.messageService.add(`GuildService: created new guild`);
    return this.httpClient.post(`${this.API_URL}/guilds`, guild);
  }

  deleteGuild(id: number) {
    this.messageService.add(`GuildService: deleted guild with id=${id}`);
    return this.httpClient.delete(`${this.API_URL}/guilds/${id}`);
  }

  removeHeroFromGuild(id: number, heroId: number) {
    this.messageService.add(`GuildService: deleted guild with id=${id}`);
    return this.httpClient.delete(`${this.API_URL}/guilds/${id}/heroes/${heroId}`);
  }

  addHeroesToGuild(id: number, heroes: HeroModel[]) {
    this.messageService.add(`GuildService: added hero to guild with id=${id}`);
    return this.httpClient.post(`${this.API_URL}/guilds/${id}/heroes`, heroes);
  }
}
