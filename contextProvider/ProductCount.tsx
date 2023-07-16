import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const CountInfo = createContext(null);
const ContextProvidercount = ({ children }: any) => {
  const [name, setname] = useState<any>("syam");
 
  console.log(children)

  return (
    <CountInfo.Provider
      value={{ name, setname }}
    >
      {children}
    </CountInfo.Provider>
  );
};
export default ContextProvidercount;
