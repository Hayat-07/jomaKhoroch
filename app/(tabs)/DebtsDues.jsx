import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UniversalFormModal from '../../components/UniversalFormModal';


const persons = [
    {
        id: "p1",
        name: "Sumon",
        phone: "01715736549",
        email: "sumon@gmail.com",
        address: "dhaka",
        createdAt: new Date().toISOString(),
        finalAmount: 1000,
        debt: 0,
        dues: 1000,

        transactions: [
            {
                id: "t1",
                type: "due",
                title: "Book",
                amount: 500, // due → positive
                date: "2025-01-05"
            },
            {
                id: "t2",
                type: "due",
                title: "Notebook",
                amount: 500,
                date: "2025-01-10"
            }
        ]
    },

    {
        id: "p2",
        name: "Rahim",
        phone: "01823456789",
        email: "rahim@gmail.com",
        address: "Chapai",
        createdAt: "2025-02-01",
        finalAmount: -700,
        debt: -700,
        dues: 0,

        transactions: [
            {
                id: "t3",
                type: "debt",
                title: "Lunch",
                amount: -300, // debt → negative
                date: "2025-02-02"
            },
            {
                id: "t4",
                type: "debt",
                title: "Transport",
                amount: -400,
                date: "2025-02-03"
            }
        ]
    },

    {
        id: "p3",
        name: "Karim",
        phone: "01998765432",
        email: "karim@gmail.com",
        address: "Rajshahi",
        createdAt: "2025-03-01",
        finalAmount: 1500,
        debt: 0,
        dues: 1500,

        transactions: [
            {
                id: "t5",
                type: "due",
                title: "Project Payment",
                amount: 1000,
                date: "2025-03-05"
            },
            {
                id: "t6",
                type: "due",
                title: "Bonus",
                amount: 500,
                date: "2025-03-10"
            }
        ]
    }
];


const DebtsDues = () => {

    const [statistics, setStatistics] = useState({
        dues: 0,
        debt: 0,
        persons: 0
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [items, setItems] = useState(persons);





    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const handleSubmit = (data) => {
        const item = {
            ...data,
            finalAmount: 0,
            date: new Date().toISOString(),
            finalAmount: 0,
            debt: 0,
            dues: 0,
            transactions: [],
        };
        console.log(item);
        setItems(prev =>
            editingIndex !== null
                ? prev.map((it, i) => (i === editingIndex ? item : it))
                : [...prev, item]
        );

        setEditingIndex(null);
    };

    useEffect(() => {
        let totalDebts = 0;
        let totalDues = 0;
        totalDebts = items.reduce((sum, person) => sum + person.debt, 0);
        totalDues = items.reduce((sum, person) => sum + person.dues, 0);

        setStatistics({
            dues: totalDues,
            debt: totalDebts,
            persons: items.length
        })
    }, [items]);




    return (
        <SafeAreaView
            style={{ flex: 1, padding: 16 }} className='border '>
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
                    <Text className='text-2xl font-bold text-green-600'> {statistics.dues}</Text>
                </View>
                <View className='border-r border-slate-300  gap-2 w-[32%] h-[64] pl-2 '>
                    <View className="flex-row">
                        <View className=' text-slate-500 rotate-[0deg]' style={{ opacity: 0.5 }} >
                            <MaterialIcons name="upgrade" size={20} color={"red"} />
                        </View>
                        <Text className='text-base font-bold'>Debt</Text>
                    </View>
                    <Text className='text-2xl font-bold text-red-600'> {statistics.debt}</Text>
                </View>
                <View className='  gap-2 w-[32%] h-[64] pl-2 '>
                    <View className="flex-row gap-2">
                        <View className=' text-slate-500 rotate-[0deg]' style={{ opacity: 0.5 }} >
                            <Ionicons name="person" size={16} color="black" />
                        </View>
                        <Text className='text-base font-bold'>Person</Text>
                    </View>
                    <Text className='text-2xl font-bold'> {statistics.persons}</Text>
                </View>



            </View>
            <ScrollView
                style={{ flex: 1 }}
                className=' mt-6'
            >
                {
                    items.map((person, index) => {
                        return <Pressable
                            onPress={() => {
                                    router.push({
                                        pathname: '/screens/PersonDetails',
                                        params: {
                                            personData: JSON.stringify(person),
                                        },
                                    });
                                }}
                            key={`${person.name}.${person.phone}`}
                            className=" bg-slate-200  w-full p-4 flex-row justify-between items-center rounded-xl mb-2 "
                        >
                            <View className='flex-row gap-4 items-center' >
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
                                <View>

                                </View>
                            </View>



                        </Pressable>
                    })
                }



            </ScrollView>
            <View>
                <TouchableOpacity
                    onPress={() => { setModalOpen(true) }}
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
            {/* <AddUpadet isOpen={isOpen} setIsOpen={setIsOpen} ></AddUpadet> */}
            <UniversalFormModal
                visible={modalOpen}
                title={editingIndex !== null ? "Update person" : "Add Person"}
                submitText={editingIndex !== null ? "Update" : "Add"}
                initialValues={
                    editingIndex !== null
                        ? items[editingIndex]
                        : { name: '', phone: '', email: '', address: '' }
                }
                fields={[
                    { name: 'name', label: 'Name', required: true },
                    { name: 'phone', label: 'Phone', keyboardType: 'numeric', required: true },
                    { name: 'email', label: 'Email', keyboardType: 'Email' },
                    { name: 'address', label: 'Address (optional)', keyboardType: 'text' },
                ]}
                onClose={() => setModalOpen(false)}
                onSubmit={handleSubmit}
            />












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