
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ShadowProvider from '../utils/ShadowProvider';
const FloatBtn = ({ fn, text, lead, tail }) => {
    return (
        <ShadowProvider
            style={{ position: 'absolute', bottom: -40, width: '80%', alignSelf: 'center' }}
            className="rounded-full"
        >
            <TouchableOpacity
                onPress={fn}
                className=" flex-row text-green-700 rounded-[10] h-[56] w-full justify-center items-center"
                style={{ backgroundColor: "#0f172a" }}
            >

                {lead && <View style={{ position: 'absolute', left: 16 }}>{lead}</View>}
                {text && <Text style={{ color: '#fff', fontSize: 16 }}>{text}</Text>}
                {tail && <View style={{ position: 'absolute', right: 16 }}>{tail}</View>}
            </TouchableOpacity>
        </ShadowProvider>


    )
}

export default FloatBtn

const styles = StyleSheet.create({

})