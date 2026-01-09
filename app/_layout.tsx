import { Stack } from 'expo-router';

import { PaperProvider } from 'react-native-paper';
import AmountDataContextProvider from '../db/AmountDataContext';



export default function RootLayout() {


  return (
    <AmountDataContextProvider>
      <PaperProvider>
        <Stack>
          <Stack.Screen
            name="index.jsx"
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ 
              headerShown: false,
              

             }}
          />
          <Stack.Screen
            name="AddUpdate"
            options={{ 
              headerShown: false,
              presentation:"modal"
              

             }}
          />

        </Stack>
      </PaperProvider>
    </AmountDataContextProvider>




  );
}
