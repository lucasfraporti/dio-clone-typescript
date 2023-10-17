import { createContext, useState } from "react";

import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./Types";
import { IUser } from "../types/User";

import { useNavigate } from "react-router-dom";

import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleLogin = async (loginData: ILoginData) => {
    try {
      const { data } = await api.get(
        `users?email=${loginData.email}&password=${loginData.password}`
      );

      if (data.length === 1) {
        setUser(data[0]);
        navigate("/feed");
      } else {
        alert("E-mail ou senha incorretos");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSignOut = () => {
    setUser({} as IUser);
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
