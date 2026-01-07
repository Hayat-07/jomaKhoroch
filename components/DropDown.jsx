import { StyleSheet, Text, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
const DropDown = () => {
    return (
        <View>
            <ModalDropdown 
            defaultValue='December'
            options={['option 1', 'option 2']}

             />
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({})