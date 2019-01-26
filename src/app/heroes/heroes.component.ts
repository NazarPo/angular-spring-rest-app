import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import {HeroModel} from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: HeroModel[];

  constructor(private heroService: HeroesService) { }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: HeroModel[]) => this.heroes = heroes);
  }

  createHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero: any = {
      name
    };
    this.heroService.createHero(hero)
      .subscribe(response => this.getHeroes());
  }

  deleteHero(id: number): void {
    this.heroService.deleteHero(id)
      .subscribe(response => this.getHeroes());
  }
}
