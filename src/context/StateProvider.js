import React, { useReducer, useContext, createContext } from 'react';

export const StateContext = createContext();
export const useStatevalue = () => useContext(StateContext);

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}
