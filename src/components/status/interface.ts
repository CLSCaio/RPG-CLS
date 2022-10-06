type atributs = {
  hp: number;
  mana: number;
  espirito: number;
  pro: number;
  for: number;
  int: number;
  dex: number;
  vel: number;
};

export interface StatusProps {
  status: atributs;
  lvl: atributs;
}
