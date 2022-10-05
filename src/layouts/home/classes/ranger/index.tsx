import { ListItems } from "../../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const ranger = {
  title: "Ranger",
  children: (
    <ListItems
      lvl={atributs.lvl}
      id="ranger"
      title="Historia"
      abilidades={skills}
      subClasses={subClasses}
      status={atributs.status}
      history="dlksajdlkjsa lkdjaslk djlk"
    />
  ),
};
