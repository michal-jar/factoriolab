import { SelectItem } from 'primeng/api';

export enum Game {
  None = 'None',
  Factorio = 'Factorio',
  CaptainOfIndustry = 'CaptainOfIndustry',
  DysonSphereProgram = 'DysonSphereProgram',
  Satisfactory = 'Satisfactory',
  FortressCraftEvolved = 'FortressCraftEvolved',
}

export const games = [
  Game.Factorio,
  Game.DysonSphereProgram,
  Game.Satisfactory,
  Game.CaptainOfIndustry,
  Game.FortressCraftEvolved,
];

export const gameOptions: SelectItem<Game>[] = [
  { value: Game.Factorio, label: 'options.game.factorio' },
  { value: Game.DysonSphereProgram, label: 'options.game.dysonSphereProgram' },
  { value: Game.Satisfactory, label: 'options.game.satisfactory' },
  { value: Game.CaptainOfIndustry, label: 'options.game.captainOfIndustry' },
  { value: Game.FortressCraftEvolved, label: 'options.game.fortressCraftEvolved' },
];
