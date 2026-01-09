import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function TabtLayout() {


  return (<Tabs
    screenOptions={{
         tabBarStyle:{
          height: 120,
         borderTopWidth: 2,
         borderBottomWidth:2,
         

         }
    }}
  >
    <Tabs.Screen
      name="DebtsDues"
      options={{
        title: "Debts Dues",
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({color,size}) => <AntDesign name="transaction" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarLabel: "Home",
        tabBarActiveTintColor:"black",
        tabBarIcon: ({color,size,focused}) => <Feather name="home" size={24} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Budget"
      options={{
        title: "Budget",
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({color,size}) => <Feather name="pie-chart" size={size} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Setting"
      options={{
        title: "Setting",
        headerShown: false,
        tabBarActiveTintColor:"black",
        tabBarIcon: ({color,size}) => <MaterialIcons name="manage-accounts" size={size} color={color} />,
      }}
    />
    

  </Tabs>





  );
}
