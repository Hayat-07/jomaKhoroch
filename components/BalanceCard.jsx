import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { amountDataContext } from '../db/AmountDataContext';


const BalanceCard = ({ }) => {
     const { arrayOfData, setArrayOfData, statisticData,setStatisticData } = useContext(amountDataContext);
    
    return (
        <View className=" w-full justify-center items-center  ">
            <View style={{}} className="py-6  ">
                <Text>Balance</Text>
                <Text style={{ fontSize: 40, fontWeight: "bold" }} className=" text-green-600 ">{statisticData?.balance || 0}<Text style={{ fontSize: 40, color: "#d1d5db" }}>TK</Text></Text>
            </View>
            <View className="w-[90%] flex-row justify-evenly border-t-2 border-slate-200 py-6 ">
                <View className=" w-[50%] justify-center items-center bg-gradient-to-r: " >
                    <View>
                        <Text className=" text-green-300">Income</Text>
                        <Text style={{ fontSize: 24, }} className=" text-gray-500 font-bold ">{statisticData?.income || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    </View>
                </View>
                <View className=" w-[50%] justify-center items-center bg-gradient-to-r: " >
                    <View>
                        <Text className=" text-red-300">Expence</Text>
                        <Text style={{ fontSize: 24 }} className=" text-gray-500 font-bold ">{statisticData?.expense || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default BalanceCard

const styles = StyleSheet.create({
    container: {

        justifyContent: "center",
        alignItems: "center"
    }
})