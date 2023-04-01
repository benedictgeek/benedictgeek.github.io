import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextType {
  currentHash: string;
  setCurrentHash: Dispatch<SetStateAction<string>>;
}

const defaultValue: ContextType = {
  currentHash: "",
  setCurrentHash: () => {},
};

export const AppContext = createContext(defaultValue);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentHash, setCurrentHash] = useState("");
  return (
    <AppContext.Provider value={{ currentHash, setCurrentHash }}>
      {children}
    </AppContext.Provider>
  );
};
