import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const PickerMy = () => {
    const[selectedItem, setSelectedItem]=useState();
    const pickerRef=useRef();
  return (
    
      <Picker
        ref={pickerRef}
        selectedValue={selectedItem}
        onValueChange={(item)=>{
            setSelectedItem(item);
        }}
       style={{width:"28%" }}
      >
        <Picker.Item label="apple" value={'apple'}/>
        <Picker.Item label="BBBB" value={'BBBB'}/>
        <Picker.Item label="ccccc" value={'ccccc'}/>
        <Picker.Item label="dddd" value={'dddd'}/>

      </Picker>
    
  )
}

export default PickerMy

const styles = StyleSheet.create({})