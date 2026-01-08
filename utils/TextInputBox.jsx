import { StyleSheet, TextInput, View } from 'react-native'


const TextInputBox = ({
    data = '',
    setData = () => { },
    leadComp = null,
    tailComp = null,
    placeholder = 'Enter amount',
    keyboardType = 'numeric',
    containerStyle = {},
    inputStyle = {},
    name = 'default',
    ...props
}) => {
    return (
        <View className="gap-4 justify-start items-start px-4" style={[styles.container, containerStyle]} >
            {leadComp ? <View style={styles.lead}>{leadComp}</View> : null}

            <TextInput
                value={data}
                onChangeText={(text) => {name==='amount'?setData(Number(text)):setData(text)}}
                style={[
                    styles.textInput,
                    props.multiline ? styles.multilineInput : null,
                    inputStyle
                ]}
                placeholder={placeholder}
                placeholderTextColor="#6b7280"
                keyboardType={keyboardType}
                {...props}
            />

            {tailComp ? <View style={styles.tail}>{tailComp}</View> : null}
        </View>
    )
}

export default TextInputBox

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        // minHeight: 56,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

       
        borderRadius: 12,
        
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
    },
    lead: {
        paddingVertical: 12,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        

    },
    tail: {
        height:44,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#111827',
        // borderWidth: 1,
        
    },
    multilineInput: {
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 8,
    },
})