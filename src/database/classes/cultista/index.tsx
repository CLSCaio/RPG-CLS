import { ListItems } from "../../../components";

import atributs from "./atributs";
import subClasses from "./subClasses";
import skills from "./skills";

export const cultista = {
  title: "Cultista",
  children: (
    <ListItems
      lvl={atributs.lvl}
      skills={skills}
      subClasses={subClasses}
      status={atributs.status}
    />
  ),
};
