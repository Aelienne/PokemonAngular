export interface IName {
  fr: string;
  en: string;
  jp: string;
}

export interface ISprite {
  regular: string;
  shiny: string;
  gmax: string;
}

export interface IType {
  name: string;
  image: string;
}

export interface ITalent {
  name: string;
  tc: boolean;
}

export interface IStat {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface IResistance {
  name: string;
  multiplier: number;
}

export interface IEvolution {
  pre: null | any;
  next: NextEvolution[];
  mega: null | any;
}

export interface NextEvolution {
  pokedex_id: number;
  name: string;
  condition: string;
}

export interface ISexe {
  male: number;
  female: number;
}

export interface IPokemon {
  pokedex_id: number;
  generation: number;
  category: string;
  name: IName;
  sprites: ISprite;
  types: IType[];
  talents: ITalent[];
  stats: IStat[];
  resistances: IResistance[];
  evolution: IEvolution;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: ISexe;
  catch_rate: number;
  level_100: number;
  formes: null | any;
}
