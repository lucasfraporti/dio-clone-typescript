import { useContext } from "react";

import { AuthContext } from "../context/Auth";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Não existe um contexto de autenticação");
  }
  return context;
};
