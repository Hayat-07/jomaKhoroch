import { useEffect, useState } from 'react'
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

const AddUpadet = ({ data, isOpen, setIsOpen, onSave }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (data) {
            setName(data.name ?? '')
            setPhone(data.phone ?? '')
            setEmail(data.email ?? '')
        } else {
            setName('')
            setPhone('')
            setEmail('')
        }
    }, [data, isOpen])

    const handleSave = () => {
        if (!name.trim() || !phone.trim()) {
            Alert.alert('Validation', 'Please enter name and phone number')
            return
        }

        const payload = {
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            date: new Date().toISOString(),
        }

        if (typeof onSave === 'function') {
            onSave(payload)
        } else {
            console.log('AddUpadet saved:', payload)
        }

        setIsOpen(false)
    }

    return (
        <Modal
            visible={isOpen}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setIsOpen(false)}
        >
            <View className='flex-1 justify-center items-center bg-black/40'>
                <View className='w-[90%] bg-slate-200 rounded-xl p-4'>
                    <Text className='text-lg font-bold mb-2'>Add / Update</Text>

                    <Text className='text-sm mb-1'>Name</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        placeholder='Full name'
                        className='w-full bg-white p-2 rounded-md mb-3'
                    />

                    <Text className='text-sm mb-1'>Phone</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        placeholder='Phone number'
                        keyboardType='phone-pad'
                        className='w-full bg-white p-2 rounded-md mb-3'
                    />

                    <Text className='text-sm mb-1'>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email (optional)'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        className='w-full bg-white p-2 rounded-md mb-4'
                    />

                    <View className='flex-row justify-between'>
                        <Pressable
                            onPress={() => setIsOpen(false)}
                            className='px-4 py-2 rounded-md bg-gray-300'
                        >
                            <Text>Cancel</Text>
                        </Pressable>

                        <Pressable
                            onPress={handleSave}
                            className='px-4 py-2 rounded-md bg-slate-900'
                        >
                            <Text className='text-white'>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddUpadet

const styles = StyleSheet.create({})