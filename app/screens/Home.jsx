import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import BalanceCard from '../../components/BalanceCard';
import CustomDropdown from '../../components/CustomDropdown';
import FloatBtn from '../../components/FloatBtn';
import HistoryCard from '../../components/HistoryCard';
import { amountDataContext } from '../../db/AmountDataContext';
import ShadowProvider from '../../utils/ShadowProvider';





const Home = () => {
    const [value, setValue] = useState('');
    const [openMenuId, setOpenMenuId] = useState(null);
    const { arrayOfData, setArrayOfData } = useContext(amountDataContext);


    return (
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", width: "100%" }} className=" bg-light-background">

            <View style={[styles.boxShadow,]} className="border p-4 mt-4 border-slate-300 justify-center items-center w-[90%] bg-white rounded-3xl">
                <View className="flex-row px-4 gap-2 absolute right-2 top-2 h-9 rounded-full border border-gray-300 justify-center items-center">

                    <CustomDropdown
                        options={["One", "Two", "Three"]}
                        selectedValue={value}
                        onSelect={setValue}
                        placeholder="all"
                        dropdownStyle={{ minWidth: 32, height: 32, justifyContent: "center", alignItems: "center" }}
                        listContainer={{ width: "72", right: 24 }}

                    />

                    <FontAwesome5 name="caret-down" size={24} color="black" />

                </View>
                <BalanceCard ></BalanceCard>
            </View>








            <View className=" flex-col mt-4   w-[90%] justify-start  ">


                <View className=" border border-slate-300 p-1 flex-row gap-2 justify-between w-full rounded-full ">
                    {/* <Ionicons name="calendar-outline" size={24} color="black" /> */}
                    <View className="justify-center items-center px-4">

                        <EvilIcons name="search" size={24} color="black" />
                    </View>
                    <ShadowProvider
                        radius={999}
                        elevation={8}
                        offset={6}
                        opacity={0.6}
                        style={{ paddingHorizontal: 16, paddingVertical: 8 }}
                    >
                        <View className="flex-row gap-4 items-center px-2">
                            <Ionicons name="filter-outline" size={24} color="black" />
                            <CustomDropdown
                                options={["One", "Two", "Three"]}
                                selectedValue={value}
                                onSelect={setValue}
                                placeholder="all"
                                dropdownStyle={{ minWidth: 32, height: 32, justifyContent: "center", alignItems: "center" }}
                                listContainer={{ width: "72", right: 24 }}

                            />

                        </View>
                    </ShadowProvider>

                </View>



                <View className="h-[300] w-full mt-2">

                    <FlatList

                        data={arrayOfData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <View key={item.id}>
                                <HistoryCard item={item} openMenuId={openMenuId} setOpenMenuId={setOpenMenuId} />
                            </View>
                        )}
                    />




                </View>


                <FloatBtn
                    fn={() => { router.push('./screens/AddAmount') }}
                    lead={<Ionicons name="add-outline" size={24} color="white" />}
                    text={'Add'}
                    newStyles={{ position: 'absolute', bottom: -40, }}
                ></FloatBtn>


            </View>






        </View>
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