import { ListItems } from "../../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const clerigo = {
  title: "Clerigo",
  children: (
    <ListItems
      lvl={atributs.lvl}
      id="clerigo"
      title="Historia"
      abilidades={skills}
      subClasses={subClasses}
      status={atributs.status}
      history="dlksajdlkjsa lkdjaslk djlk"
    />
  ),
};
