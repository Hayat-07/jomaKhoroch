import React, { createContext, useEffect, useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export const DebtDuesContext = createContext();

const sampleDebtDuesData = [
  
];



const DebtDuesContextProvider = ({ children }) => {
      


  return (
    <DebtDuesContext.Provider value={{
      

    }}>
      {children}
    </DebtDuesContext.Provider>
  )
}

export default DebtDuesContextProvider

