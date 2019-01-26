import { Injectable } from '@angular/core';
import { HeroModel } from '../hero.model';
import { MessageService } from '../messages/message.service';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
  export class HeroesService {
  API_URL  =  'http://localhost:8080/api';
  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) { }

  getHeroes() {
    this.messageService.add('HeroesService: fetched heroes');
    return this.httpClient.get(`${this.API_URL}/heroes`);
  }

  getTopHeroes() {
    this.messageService.add('HeroesService: fetched TOP heroes');
    return this.httpClient.get(`${this.API_URL}/heroes/top`);
  }

  getHero(id: number) {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.httpClient.get(`${this.API_URL}/heroes/${id}`);
  }

  createHero(hero: HeroModel) {
    this.messageService.add(`HeroService: created new hero`);
    return this.httpClient.post(`${this.API_URL}/heroes`, hero);
  }

  deleteHero(id: number) {
    this.messageService.add(`HeroService: deleted hero with id=${id}`);
    return this.httpClient.delete(`${this.API_URL}/heroes/${id}`);
  }

  getAvailableHeroes() {
    this.messageService.add('HeroesService: fetched available heroes');
    return this.httpClient.get(`${this.API_URL}/heroes/available`);
  }
}
