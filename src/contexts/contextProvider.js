import React ,{useState, createContext, useContext} from "react";
const StateContext = createContext();

export const ContextProvider = ({children})=>{
    const [currentColor, setCurrentColor] = useState('#5be4bb');
    const [currentMemeTextColor, setCurrentMemeTextColor] = useState('#000000');

    return (
        <StateContext.Provider value={
            {currentColor, setCurrentColor,
            currentMemeTextColor, setCurrentMemeTextColor}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=>useContext(StateContext);