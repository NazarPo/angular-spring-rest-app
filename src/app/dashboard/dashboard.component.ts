import { Component, OnInit } from '@angular/core';
import { HeroModel } from '../hero.model';
import { HeroesService } from '../heroes/heroes.service';
import {GuildService} from '../guilds/guild.service';
import {GuildModel} from '../guild.model';
import {TavernService} from '../taverns/tavern.service';
import {TavernModel} from '../tavern.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: HeroModel[] = [];
  guilds: GuildModel[] = [];
  taverns: TavernModel[] = [];

  constructor(
    private heroService: HeroesService,
    private guildService: GuildService,
    private tavernService: TavernService
  ) { }

  ngOnInit() {
    this.getTopHeroes();
    this.getTopGuilds();
    this.getTopTaverns();
  }

  getTopHeroes(): void {
    this.heroService.getTopHeroes()
      .subscribe((heroes: HeroModel[]) => this.heroes = heroes);
  }

  getTopGuilds(): void {
    this.guildService.getTopGuilds()
      .subscribe((guilds: GuildModel[]) => this.guilds = guilds);
  }

  getTopTaverns(): void {
    this.tavernService.getTopTaverns()
      .subscribe((taverns: TavernModel[]) => this.taverns = taverns);
  }
}
