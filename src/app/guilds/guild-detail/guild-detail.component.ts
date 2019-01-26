import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GuildModel } from '../../guild.model';
import { GuildService } from '../guild.service';
import { HeroesService } from '../../heroes/heroes.service';
import { HeroModel } from '../../hero.model';

@Component({
  selector: 'app-guild-detail',
  templateUrl: './guild-detail.component.html',
  styleUrls: ['./guild-detail.component.css']
})
export class GuildDetailComponent implements OnInit {
  guild: GuildModel;
  dropDownList: HeroModel[] = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private route: ActivatedRoute,
    private guildService: GuildService,
    private location: Location,
    private heroesService: HeroesService
  ) {
  }

  ngOnInit() {
    this.getGuild();
    this.fetchHeroes();
    this.setDropwdownSettings();

  }

  getGuild(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guildService.getGuild(id)
      .subscribe((guild: GuildModel) => this.guild = guild);
  }

  goBack(): void {
    this.location.back();
  }

  fetchHeroes(): void {
    this.heroesService.getAvailableHeroes()
      .subscribe((result: HeroModel[]) => this.dropDownList = result);
  }

  deleteHeroFromGuild(heroId: number): void {
    this.guildService.removeHeroFromGuild(this.guild.id, heroId)
      .subscribe(() => {
        this.getGuild();
        this.fetchHeroes();
      });
  }

  addHeroesToGuild(): void {
    this.guildService.addHeroesToGuild(this.guild.id, this.selectedItems)
      .subscribe(() => {
        this.getGuild();
        this.fetchHeroes();
        this.selectedItems = [];
      });
  }

  setDropwdownSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select heroes...',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }
}
