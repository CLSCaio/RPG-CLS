import { ListItems } from "../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const acolito = {
  title: "Acólito",
  children: (
    <ListItems
      lvl={atributs.lvl}
      skills={skills}
      subClasses={subClasses}
      status={atributs.status}
    />
  ),
};
