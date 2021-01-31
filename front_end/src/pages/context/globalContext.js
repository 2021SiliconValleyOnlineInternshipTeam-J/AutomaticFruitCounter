import React, { useState, createContext } from "react";

const GlobalContext = createContext(null);
const GlobalContextProvider = ({ children }) => {
  const [jsonData, setData] = useState([
    {
      url: "",
    },
  ]);
  const store = { jsonData, setData };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalContextProvider };
