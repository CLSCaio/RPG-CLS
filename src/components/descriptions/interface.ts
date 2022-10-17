export type passives = [
  alliancePassive: string,
  conflitPassive: string,
  statusPassive: string
];

export interface DescriptionsProps {
  history: string;
  passive: passives;
}
