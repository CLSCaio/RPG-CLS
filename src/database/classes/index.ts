import { AccordionList } from "library-caiol.sousa";
import { ladino } from "./ladino";
import { guerreiro } from "./guerreiro";
import { mago } from "./mago";
import { bardo } from "./bardo";
import { acolito } from "./acolito";
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
    ...acolito,
  },
  {
    ...ranger,
  },
  {
    ...boboDaCorte,
  },
];
