import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddUpadet from '../../components/AddUpadet';
const DebtsDues = () => {
    const[isOpen,setIsOpen]=useState(false);


    const persons = [
        {
            name: "Sumon",
            phone: "01715736549",
            email: "sumon@gmail.com",
            date: new Date().toISOString(),
            finalAmount: 1000,
            transactions: [
                {
                    pabo: true,
                    title: "Book",
                    amount: 500,
                    date: new Date("2025-01-05").toISOString()
                },
                {
                    pabo: true,
                    title: "Notebook",
                    amount: 500,
                    date: new Date("2025-01-10").toISOString()
                }
            ]
        },

        {
            name: "Rahim",
            phone: "01823456789",
            email: "rahim@gmail.com",
            date: new Date("2025-02-01").toISOString(),
            finalAmount: -700,
            transactions: [
                {
                    pabo: false,
                    title: "Lunch",
                    amount: 300,
                    date: new Date("2025-02-02").toISOString()
                },
                {
                    pabo: false,
                    title: "Transport",
                    amount: 400,
                    date: new Date("2025-02-03").toISOString()
                }
            ]
        },

        {
            name: "Karim",
            phone: "01998765432",
            email: "karim@gmail.com",
            date: new Date("2025-03-01").toISOString(),
            finalAmount: 1500,
            transactions: [
                {
                    pabo: true,
                    title: "Project Payment",
                    amount: 1000,
                    date: new Date("2025-03-05").toISOString()
                },
                {
                    pabo: true,
                    title: "Bonus",
                    amount: 500,
                    date: new Date("2025-03-10").toISOString()
                }
            ]
        }
    ];
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 16
            }}
            className='border '>

            <View className='justify-center  items-start m-4 w-[90%] pl-4'>
                <Text className="text-2xl font-bold text-start ">Debts & Dues</Text>
            </View>

            <View className=' flex-row justify-between bg-white py-5 rounded-xl  '>


                <View className='border-r border-slate-300  gap-2 w-[32%] h-[64] pl-2 '>
                    <View className="flex-row">
                        <View className=' text-slate-500 rotate-[180deg]' style={{ opacity: 0.5 }} >
                            <MaterialIcons name="upgrade" size={20} color={"green"} />
                        </View>
                        <Text className='text-base font-bold'>Dues</Text>
                    </View>
                    <Text className='text-2xl font-bold text-green-600'> 488723</Text>
                </View>
                <View className='border-r border-slate-300  gap-2 w-[32%] h-[64] pl-2 '>
                    <View className="flex-row">
                        <View className=' text-slate-500 rotate-[0deg]' style={{ opacity: 0.5 }} >
                            <MaterialIcons name="upgrade" size={20} color={"red"} />
                        </View>
                        <Text className='text-base font-bold'>Debt</Text>
                    </View>
                    <Text className='text-2xl font-bold text-red-600'> 488723</Text>
                </View>
                <View className='  gap-2 w-[32%] h-[64] pl-2 '>
                    <View className="flex-row gap-2">
                        <View className=' text-slate-500 rotate-[0deg]' style={{ opacity: 0.5 }} >
                            <Ionicons name="person" size={16} color="black" />
                        </View>
                        <Text className='text-base font-bold'>Person</Text>
                    </View>
                    <Text className='text-2xl font-bold'> 02</Text>
                </View>



            </View>

            <ScrollView
                style={{ flex: 1 }}
                className=' mt-6'
            >
                {
                    persons.map((person, index) => {
                        return <Pressable
                            onPress={()=>{console.log("card pressed")}}
                            key={`${person.name}.${person.phone}`}
                            className=" bg-slate-200  w-full p-4 flex-row justify-between items-center rounded-xl mb-2 "
                        >
                            <View className=' flex-row gap-4 items-center'>
                                <View className=" border border-slate-100 rounded-full justify-center items-center w-[64] h-[64]">
                                    <Image
                                        style={styles.image}
                                        source="https://picsum.photos/seed/696/3000/2000"
                                        placeholder={{ blurhash }}
                                        contentFit="cover"
                                        transition={1000}

                                    />
                                </View>

                                <View>
                                    <Text>{person.name}</Text>
                                    <Text>{person.phone}</Text>
                                </View>
                            </View>



                        </Pressable>
                    })
                }



            </ScrollView>

            <View>
                <TouchableOpacity
                    onPress={()=>{setIsOpen(!isOpen)}}
                    style={{
                        elevation: 10,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                    }}
                    className='absolute right-4 bottom-0 rounded-full bg-green-700 w-[64] h-[64] justify-center items-center'
                >
                    <Text className='text-white'>
                        Add
                    </Text>

                </TouchableOpacity>
            </View>
            <AddUpadet isOpen={isOpen} setIsOpen={setIsOpen} ></AddUpadet>











        </SafeAreaView>
    )
}

export default DebtsDues

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 32,
        backgroundColor: '#0553',
    },
})