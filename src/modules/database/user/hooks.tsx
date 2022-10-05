import { useCallback, useMemo, useState } from "react";

import Store from "./store";
import { ActionsProps, IUser } from "./interface";

export const StoreUserProvider = ({ children }: ActionsProps) => {
  const [userStore, setUserStore] = useState<IUser[] | []>([]);

  const resetUser = useCallback(() => setUserStore([]), []);
  const saveUser = useCallback(
    (payload: IUser) => setUserStore([...userStore, payload]),
    [userStore]
  );
  const value = useMemo(
    () => ({ userStore, saveUser, resetUser }),
    [userStore, saveUser, resetUser]
  );

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
