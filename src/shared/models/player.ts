import { Item } from './item';

export class Player {
  championName: string;
  isBot: boolean;
  isDead: boolean;
  items: Item[];
  level: number;
  position: string;
  summonerName: string;
  team: string;
}
