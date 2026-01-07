import { StyleSheet, Text, View } from 'react-native'
import { useState,createContext } from 'react';
import React from 'react';

export const amountDataContext = createContext(); 




const AmountDataContextProvider = ({ children }) => {
   const[arrayOfData,setArrayOfData]=useState([]);




  return (
    <amountDataContext.Provider value={{
      arrayOfData,
      setArrayOfData

    }}>
      {children}
    </amountDataContext.Provider>
  )
}

export default AmountDataContextProvider

