import {PetModel} from './pet.model';
import {TavernModel} from './tavern.model';

export class HeroModel {
  id: number;
  name: string;
  pet: PetModel | null;
  taverns: TavernModel[];
}
