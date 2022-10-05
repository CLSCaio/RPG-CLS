import { ReactNode } from "react";

export interface IUser {
  name: string;
  weight: string;
  height: string;
  age: string;
}

export interface storeProps {
  userStore?: IUser[];
  saveUser: (payload: IUser) => void;
  resetUser: () => void;
}

export interface ActionsProps {
  children: ReactNode;
}
