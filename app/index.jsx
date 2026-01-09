import { router } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';
import "../global.css";



const index = () => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Index Screen</Text>
            <View>
                {
                    setTimeout(() => {
                        // Navigate to the Home tab after 1 second
                        router.replace('(tabs)');
                    }, 7000)
                }
            </View>
        </View>
    )
}


export default index
const styles = StyleSheet.create({})