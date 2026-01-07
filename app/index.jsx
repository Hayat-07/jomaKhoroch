import { StyleSheet, View } from 'react-native';
import "../global.css";
import Home from './screens/Home';


const index = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Home></Home>
        </View>
    )
}


export default index
const styles = StyleSheet.create({})