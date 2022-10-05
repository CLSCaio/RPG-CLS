import { ListItems } from "../../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const boboDaCorte = {
  title: "Bobo da corte",
  children: (
    <ListItems
      lvl={atributs.lvl}
      id="boboDaCorte"
      title="Historia"
      abilidades={skills}
      subClasses={subClasses}
      status={atributs.status}
      history="dlksajdlkjsa lkdjaslk djlk"
    />
  ),
};
