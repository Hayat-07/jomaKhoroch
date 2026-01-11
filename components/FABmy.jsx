import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const FABmy = ({ itemData,fn, newStyles,deleteItem,setOpenModal,setSelectedItemId }) => {
    const [open, setOpen] = useState(false);
     
    return (
        <View
            style={newStyles}
        >
            <Pressable
                onPress={() => { setOpen(!open) }}
            >
                <Entypo name="dots-three-vertical" size={24} color="gray" />
            </Pressable>
            {
                open && (
                    <View
                        className=" absolute top-4 right-[40] bg-white border border-gray-300 rounded-lg w-32 shadow-lg  "
                        style={{ zIndex: 50 }}
                    >
                        <TouchableOpacity
                            onPress={() => { 
                                deleteItem(fn.id); 
                                setOpen(false); }}
                            className=" px-4 py-2 border-b border-gray-200 ">
                            <Text className=" text-red-600">Delete</Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                                fn.setBudgetName(itemData.budgetName);
                                fn.setExpense(String(itemData.expense));
                                fn.setBudget(String(itemData.budget));

                                setSelectedItemId(fn.id)
                                setOpenModal(true); 
                                setOpen(false) }}
                            className=" px-4 py-2 border-b border-gray-200 ">
                            <Text className=" text-red-600">Edit</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default FABmy

const styles = StyleSheet.create({})