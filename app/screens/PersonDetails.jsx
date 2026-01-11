import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PersonDetails = () => {
    const { personData } = useLocalSearchParams();
   
    const person = JSON.parse(personData);
    const { name, email, phone, finalAmount, date, address, transactions } = person;
    return (
        <View style={{ flex: 1 }} className=" justify-center items-center border p-4">

            <Text>PersonDetails</Text>
            <View>
                <Text>{name}</Text>
                <Text>{phone}</Text>
                <Text>{email}</Text>
                <Text>{address}</Text>
                <Text>{finalAmount}</Text>
                <Text>{date}</Text>
            </View>

            <ScrollView 
            className="w-full border"
            styles={{
                
            }}
             >
                {
                    transactions.map((item,index) => {
                        return (
                            <View key={index} className="border w-full h-20">
                                <Text>{item.title}</Text>
                                <Text>{item.type}</Text>
                                <Text>{item.amount}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default PersonDetails

const styles = StyleSheet.create({})