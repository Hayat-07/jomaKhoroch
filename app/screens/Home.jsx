import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useContext, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, View,Platform } from 'react-native';
import BalanceCard from '../../components/BalanceCard';
import CustomDropdown from '../../components/CustomDropdown';
import HistoryCard from '../../components/HistoryCard';
import { amountDataContext } from '../../db/AmountDataContext';
import ShadowProvider from '../../utils/ShadowProvider';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from 'expo-router';




const Home = () => {
    const [value, setValue] = useState('');
    const [openMenuId, setOpenMenuId] = useState(null);
    const { thisMonthData, searchInput, setSearchInput, arrayOfData, selectedMonth, setSelectedMonth, setArrayOfData, statisticData, setStatisticData } = useContext(amountDataContext);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "All",];
    const categories = ["All", "Income", "Expense"];
    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", width: "100%" }} className=" bg-light-background"
        
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

            >

            <View style={[styles.boxShadow,]} className="border relative p-4 mt-4 border-slate-300 justify-center items-center w-[90%] bg-white rounded-3xl">
                <BalanceCard ></BalanceCard>
            </View>




            <View className=" flex-col mt-4   w-[90%] justify-start  ">

                <View className=" w-full flex-row justify-between  items-center my-4 ">


                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 120 }}
                    >
                        {
                            categories.map((cat, index) => (
                                <View key={cat} className=" justify-center items-center ">
                                    <Pressable
                                        onPress={() => console.log("Category pressed:", cat)}
                                        className="px-4 py-1 rounded-full"
                                    >
                                        <Text className="text-sm">{cat}</Text>
                                    </Pressable>
                                </View>
                            ))
                        }
                    </ScrollView>


                    <View className="absolute flex-row right-0 top-0  mr-4 border border-slate-300 rounded-full px-2 py-1">
                        <CustomDropdown
                            options={months}
                            selectedValue={months[selectedMonth]}
                            onSelect={(val) => {
                                const monthIndex = months.indexOf(val);
                                setSelectedMonth(monthIndex);
                                console.log("Selected month index:", monthIndex);
                            }}
                            placeholder="Select Month"
                            dropdownStyle={{ minWidth: 72, paddingHorizontal: 4, gap: 4, height: 24, justifyContent: "center", alignItems: "center", position: 'relative', flexDirection: "row" }}
                            listContainer={{ width: "auto", right: 24 }}
                            containerStyle={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}
                            icon={<Entypo name="chevron-small-down" size={24} color="black" />}
                        />
                    </View>



                </View>

                <View className="h-[64%] w-full mt-2">

                    <FlatList

                        data={thisMonthData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <View key={item.id}>
                                <HistoryCard item={item} openMenuId={openMenuId} setOpenMenuId={setOpenMenuId} />
                            </View>
                        )}
                    />




                </View>

                <ShadowProvider
                    radius={999}
                    elevation={8}
                    offset={6}
                    opacity={0.6}
                    style={{ padding:8,paddingHorizontal:12, width: "auto", flexDirection: "row",justifyContent: "space-between", alignItems: "center", marginBottom: -72, }}

                >
                    <View className=" border border-slate-300 px-4  flex-row gap-2 justify-start items-center w-[64%] rounded-full bg-white ">
                        <EvilIcons name="search" size={24} color="black" />

                        <TextInput
                            className=" w-[100%] justify-center items-center px-4 h-full"
                            placeholder="Type here to search"
                            value={searchInput}
                            onChangeText={(text) => setSearchInput(text)}
                        ></TextInput>

                    </View>
                    <Pressable
                        onPress={() => { router.push('./screens/AddAmount') }}
                        className=" justify-center items-center w-[32%] px-2 h-[48] rounded-full bg-slate-900"
                    >
                        <Ionicons name="add-outline" size={24} color="white" />
                    </Pressable>

                </ShadowProvider>

                {/* <FloatBtn
                    fn={() => { router.push('./screens/AddAmount') }}
                    lead={<Ionicons name="add-outline" size={24} color="white" />}
                    text={''}
                    newStyles={{ position: 'absolute', bottom: 80, width: 60, justifyContent: "center", alignItems: "center", height: 60, borderRadius: 30 }}
                ></FloatBtn> */}


            </View>






        </KeyboardAvoidingView>
    )
}

export default Home

const styles = StyleSheet.create({
    tabBtn: {
        width: 100,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    boxShadow: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 6,
            height: 6
        },
        shadowOpacity: 0.6,
        shadowRadius: 4
    },
    androidShadow: {
        elevation: 2,
    },
})