import { AccordionList } from "library-caiol.sousa";
import { humanos } from "./humanos";
import { anoes } from "./anoes";
import { orcs } from "./orcs";
import { alados } from "./alados";
import { demonios } from "./demonios";
import { elfos } from "./elfos";
import { bestiais } from "./bestiais";
import { sereianos } from "./sereianos";
import { draconatas } from "./draconatas";
import { esqueletos } from "./esqueletos";

export const racas: AccordionList[] = [
  {
    ...humanos,
  },
  {
    ...anoes,
  },
  {
    ...orcs,
  },
  {
    ...alados,
  },
  {
    ...demonios,
  },
  {
    ...elfos,
  },
  {
    ...bestiais,
  },
  {
    ...sereianos,
  },
  {
    ...draconatas,
  },
  {
    ...esqueletos,
  },
];
