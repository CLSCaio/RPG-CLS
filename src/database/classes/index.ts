import { AccordionList } from "library-caiol.sousa";
import { ladino } from "./ladino";
import { guerreiro } from "./guerreiro";
import { mago } from "./mago";
import { bardo } from "./bardo";
import { cultista } from "./cultista";
import { ranger } from "./ranger";
import { boboDaCorte } from "./boboDaCorte";

export const classes: AccordionList[] = [
  {
    ...ladino,
  },
  {
    ...guerreiro,
  },
  {
    ...mago,
  },
  {
    ...bardo,
  },
  {
    ...cultista,
  },
  {
    ...ranger,
  },
  {
    ...boboDaCorte,
  },
];
