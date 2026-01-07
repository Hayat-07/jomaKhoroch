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
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]} className="gap-4">
            {leadComp ? <View style={styles.lead}>{leadComp}</View> : null}

            <TextInput
                value={data}
                onChangeText={setData}
                style={[styles.textInput, inputStyle]}
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
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',

        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        borderColor: '#e5e7eb',
    },
    lead: {
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tail: {
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: '100%',
        padding: 0,
        fontSize: 16,
        color: '#111827',
    },
})