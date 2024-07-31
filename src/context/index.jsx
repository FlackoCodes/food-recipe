import {  createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({Children}){
    return <GlobalContext.Provider>
        {Children}
    </GlobalContext.Provider>
}