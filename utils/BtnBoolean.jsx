import { Pressable, StyleSheet, Text, View } from 'react-native'

const BtnBoolean = ({ type, setType, text1, text2,textStyle,btnStyle,containerStyle }) => {

    const isTrue = type === 'Income' || type === true;
    const bgColor = isTrue ? 'bg-green-600' : 'bg-gray-300';
    const textColor = isTrue ? 'text-white' : 'text-black';
    const bgColor2 = isTrue ? 'bg-gray-300' : 'bg-red-600';
    const textColor2 = isTrue ? 'text-black' : 'text-white';

    return (
        <View className={`flex-row justify-between items-center rounded-full  bg-gray-300 w-[90%] self-center`} style={containerStyle}>
            

                <Pressable
                style={[styles.btn, btnStyle]}
                    onPress={() => { setType('Income')}}
                    className={`${textColor} ${bgColor}`}
                >
                    <Text className={`${textColor} text-[16px]`} style={textStyle}>{text1}</Text>
                </Pressable>
                <Pressable
                style={[styles.btn, btnStyle]}
                    onPress={() => { setType('Expense')}}
                    className={`${textColor2} ${bgColor2}`}
                >
                    <Text className={`${textColor2} text-[16px]`} style={textStyle}>{text2}</Text>
                </Pressable>
                
               

            
        </View>
    )
}

export default BtnBoolean

const styles = StyleSheet.create({
    btn: {
        width: '50%',
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 24,
    }
})