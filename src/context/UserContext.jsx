import { createContext } from "react";

export const userContext = createContext();

export const useUser = () => {
  const context = userContext();
  if (!context) {
    throw new Error("useUser must be used within a userContext.Provider");
  }
  return context;
};


export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}