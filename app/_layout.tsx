import { Stack } from 'expo-router';

import { PaperProvider } from 'react-native-paper';
import AmountDataContextProvider from '../db/AmountDataContext';



export default function RootLayout() {


  return (
    <AmountDataContextProvider>
      <PaperProvider>
        <Stack />
      </PaperProvider>
    </AmountDataContextProvider>




  );
}
