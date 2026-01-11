import { StyleSheet, Text, View } from 'react-native'
import { useContext } from 'react';
import { amountDataContext } from '../db/AmountDataContext';


const BalanceCard = ({ }) => {
     const { thisMonthData,setThisMonthData,arrayOfData, setArrayOfData, statisticData,setStatisticData } = useContext(amountDataContext);
    
    return (
        <View className=" w-full justify-center items-center   ">
            
            <View className="w-[90%] justify-evenly  ">
                
                <View className=" border-b border-slate-300 py-2 w-full flex-row justify-between items-center  " >
                    
                        <Text className="  w-20 font-bold">Income</Text>
                        <Text style={{ fontSize: 24, }} className=" text-gray-600 font-semibold "><Text>+</Text> {statisticData?.income || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    
                </View>
                <View className="border-b-4 border-slate-300 py-2 w-full flex-row justify-between items-center " >
                    
                        <Text className="  w-20 font-bold">Expence</Text>
                        <Text style={{ fontSize: 24 }} className=" text-gray-600 font-semibold "><Text>-</Text> {statisticData?.expense || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    
                </View>
                <View className="  py-2 w-full flex-row justify-between items-center " >
                    
                        <Text className="  w-20 font-extrabold">Balance Remaining</Text>
                        <Text style={{ fontSize: 24 }} className=" text-green-600 font-semibold "><Text className=' text-gray-500'>=</Text> {statisticData?.balance || 0} <Text style={{ fontSize: 12, color: "#d1d5db" }}>TK</Text></Text>
                    
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