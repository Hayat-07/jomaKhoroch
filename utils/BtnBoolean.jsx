import { Pressable, StyleSheet, Text, View } from 'react-native'

const BtnBoolean = ({ isTrue,setIsTrue,text1,text2}) => {

    const bgColor = isTrue ? 'bg-green-600' : 'bg-gray-300';
    const textColor = isTrue ? 'text-white' : 'text-black';
    const bgColor2 = isTrue ? 'bg-gray-300' : 'bg-green-600';
    const textColor2 = isTrue ? 'text-black' : 'text-red-700';

    return (
        <View className={`flex-row justify-center items-center rounded-full gap-2`}>
            

                <Pressable
                style={styles.btn}
                    onPress={() => { setIsTrue(true)}}
                    className={`${textColor} ${bgColor}`}
                >
                    <Text>{text1}</Text>
                </Pressable>
                <Pressable
                style={styles.btn}
                    onPress={() => { setIsTrue(false)}}
                    className={`${textColor2} ${bgColor2}`}
                >
                    <Text>{text2}</Text>
                </Pressable>
                
               

            
        </View>
    )
}

export default BtnBoolean

const styles = StyleSheet.create({
    btn: {
        width: '44%',
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
    }
})