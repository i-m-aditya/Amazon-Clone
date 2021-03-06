//setup data layer
// we need this to track the basket
import React from "react"
import { createContext, useContext, useReducer } from "react";
import { useImperativeHandle } from "react";

export const StateContext = createContext()

// build a provider

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)


export const useStateValue = () => useContext(StateContext)