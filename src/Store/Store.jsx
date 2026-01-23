import { createContext, useContext, useState } from "react";

const Store = createContext();

const StoreProvider = ({children})=>{
    
    // add your values here...
    const [openTabId, setOpenTabId] = useState(1);

    return(
        <Store.Provider value={{
            openTabId,
            setOpenTabId
        }}>
             {children}
        </Store.Provider>
    )
}



// use when we want store value 
const useStore =()=>{
    return(useContext(Store));
}


export {useStore , StoreProvider}