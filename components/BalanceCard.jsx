import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { amountDataContext } from '../db/AmountDataContext';


const BalanceCard = ({ }) => {
     const { thisMonthData,setThisMonthData,arrayOfData, setArrayOfData, statisticData,setStatisticData } = useContext(amountDataContext);
    
    return (
        <View className=" w-full justify-center items-center   ">
            
            <View className="w-[90%] justify-evenly  ">
                
                <View className=" border-b border-slate-300 py-1 w-full flex-row justify-between items-center  " >
                    
                        <Text className=" text-green-300 w-20 font-bold">Income</Text>
                        <Text style={{ fontSize: 24, }} className=" text-gray-500 font-bold ">{statisticData?.income || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    
                </View>
                <View className="border-b border-slate-300 py-1 w-full flex-row justify-between items-center " >
                    
                        <Text className=" text-red-300 w-20 font-bold">Expence</Text>
                        <Text style={{ fontSize: 24 }} className=" text-gray-500 font-bold ">{statisticData?.expense || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    
                </View>

            </View>
            <View style={{}} className=" w-[90%]   justify-between items-center flex-row gap-4 ">
                <Text className=' w-20 font-bold'>Balance</Text>
                <Text style={{ fontSize: 24, fontWeight: "bold" }} className=" text-green-600 ">{statisticData?.balance || 0}<Text style={{ fontSize: 12, color: "#d1d5db" }}>  TK</Text></Text>
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