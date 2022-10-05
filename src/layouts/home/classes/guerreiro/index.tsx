import { ListItems } from "../../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const guerreiro = {
  title: "Guerreiro",
  children: (
    <ListItems
      lvl={atributs.lvl}
      id="guerreiro"
      title="Historia"
      abilidades={skills}
      subClasses={subClasses}
      status={atributs.status}
      history="dlksajdlkjsa lkdjaslk djlk"
    />
  ),
};
