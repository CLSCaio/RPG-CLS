import { useContext } from "react";
import Store from "./store";

export const useStoreUser = () => {
  const context = useContext(Store);
  if (!context)
    throw new Error("useMenuContext must be used within a MenuProvider");
  const { userStore, saveUser, resetUser } = context;
  return {
    userStore,
    saveUser,
    resetUser,
  };
};
