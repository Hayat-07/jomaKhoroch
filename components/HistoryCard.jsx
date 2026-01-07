import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { amountDataContext } from '../db/AmountDataContext';


const HistoryCard = ({ item, openMenuId, setOpenMenuId }) => {
    const { arrayOfData, setArrayOfData } = useContext(amountDataContext);
    const [income, setIncome] = useState(item.type === 'Income' ? true : false);
    let rotationDegree = income ? '0deg' : '180deg';
    let rotationColor = income ? '#16a34a' : '#dc2626';


    const toggleMenu = () => {
        const isOpen = openMenuId === item.id;
        setOpenMenuId(isOpen ? null : item.id);
    };
    const deleteItem = (id) => {
        Alert.alert(
            "Delete Item",
            "Are you sure you want to delete this item?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => {
                        console.log("Delete cancelled");
                    },
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        console.log("delete item", id);

                        const filteredData = arrayOfData.filter(
                            (data) => data.id !== id
                        );

                        setArrayOfData(filteredData);
                    },
                },
            ]
        );
    };

    const [value, setValue] = useState('');



    return (
        <View
            className="  bg-gray-100 h-[72] mt-2 rounded-3xl flex-row justify-between items-center px-4"
        >
            <View className='flex-row gap-4'>

                <View className='gap-4 text-slate-600 font-bold justify-center items-center h-full flex-row'>
                    <View className=' text-slate-500 rotate-[180deg]' style={{ transform: [{ rotateZ: rotationDegree }], opacity: 0.5 }} >
                        <MaterialIcons name="upgrade" size={20} color={rotationColor} />
                    </View>
                    <Text className='font-bold text-slate-600' >{item.amount}</Text>
                </View>


                <View className=" w-[60%]">
                    <Text className='text-slate-600'>{item.title}</Text>
                </View>
            </View>

            <Pressable className="text-slate-400 absolute top-auto right-4"
                onPress={toggleMenu}
            >
                <MaterialIcons name="more-vert" size={24} color="#94a3b8" />
            </Pressable>
            {
                openMenuId === item.id && (
                    <View
                        className=" absolute top-6 right-0 bg-white border border-gray-300 rounded-lg w-32 shadow-lg  "
                        style={{ zIndex: 50 }}
                    >
                        <TouchableOpacity
                            onPress={() => { deleteItem(item.id); setOpenMenuId(null); }}
                            className=" px-4 py-2 border-b border-gray-200 ">
                            <Text className=" text-red-600">Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setOpenMenuId(null); router.push({ pathname: '/screens/AddAmount', params: { id: item.id } }) }}
                            className=" px-4 py-2 border-b border-gray-200 ">
                            <Text className=" text-red-600">Edit</Text>
                        </TouchableOpacity>
                    </View>
                )
            }


        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({

})