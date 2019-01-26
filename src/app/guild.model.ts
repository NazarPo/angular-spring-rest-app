import { HeroModel } from './hero.model';

export class GuildModel {
  id: number;
  name: string;
  description: string;
  heroes: HeroModel[];
}
