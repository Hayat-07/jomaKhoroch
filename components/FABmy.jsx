import Entypo from '@expo/vector-icons/Entypo';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const FABmy = ({  newStyles }) => {
    const [open, setOpen] = useState(false);
     
    return (
        <View
            style={newStyles}
        >
            <Pressable
                onPress={() => { setOpen(!open) }}
            >
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </Pressable>
            {
                open && (
                    <View
                        className=" absolute top-4 right-[40] bg-white border border-gray-300 rounded-lg w-32 shadow-lg  "
                        style={{ zIndex: 50 }}
                    >
                        <TouchableOpacity
                            onPress={() => { deleteItem(item.id); setOpen(false); }}
                            className=" px-4 py-2 border-b border-gray-200 ">
                            <Text className=" text-red-600">Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setOpen(false); router.push({ pathname: '/screens/AddAmount', params: { id: item.id } }) }}
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