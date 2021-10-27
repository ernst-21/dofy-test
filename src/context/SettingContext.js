import { createContext, useState } from 'react';


export const SettingContext = createContext();

export function SettingContextProvider({ children }) {
  const [settings, setSettings] = useState({});

  return (
    <SettingContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingContext.Provider>
  );
}
