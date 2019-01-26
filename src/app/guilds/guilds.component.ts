import { Component, OnInit } from '@angular/core';
import {GuildModel} from '../guild.model';
import {GuildService} from './guild.service';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.css']
})
export class GuildsComponent implements OnInit {
  guilds: GuildModel[];
  constructor(private guildService: GuildService) { }

  ngOnInit() {
    this.getGuilds();
  }

  getGuilds(): void {
    this.guildService.getGuilds()
      .subscribe((guilds: GuildModel[]) => this.guilds = guilds);
  }

  createGuild(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) {
      return;
    }
    const guild: any = {
      name,
      description
    };
    this.guildService.createGuild(guild)
      .subscribe(response => this.getGuilds());
  }

  deleteGuild(id: number): void {
    this.guildService.deleteGuild(id)
      .subscribe(response => this.getGuilds());
  }
}
