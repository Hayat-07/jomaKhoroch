import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HistoryCard = () => {
    const [income, setIncome] = useState(true);
    let rotationDegree = income ? '0deg' : '180deg';
    let rotationColor = income ? '#16a34a' : '#dc2626';
    return (
        <View className="  bg-gray-100 h-[72] mt-2 rounded-3xl flex-row justify-between items-center px-4">
            <View className='flex-row gap-4'>

                <View className='gap-4 text-slate-600 font-bold justify-center items-center h-full flex-row'>
                    <View className=' text-slate-500 rotate-[180deg]' style={{ transform: [{ rotateZ: rotationDegree }], opacity: 0.5 }} >
                        <MaterialIcons name="upgrade" size={20} color={rotationColor} />
                    </View>
                    <Text className='font-bold text-slate-600' >240</Text>
                </View>


                <View className=" w-[70%]">
                    <Text className='text-slate-600'>HistoryCard HistoryCard HistoryCard</Text>
                </View>
            </View>

            <View className="text-slate-400">
                <MaterialCommunityIcons name="dots-vertical" size={24} color="#94a3b8" />
            </View>
        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({

})