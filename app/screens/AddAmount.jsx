import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import BtnBoolean from '../../utils/BtnBoolean';
import DatePick from '../../utils/DatePick';
import TextInputBox from '../../utils/TextInputBox';
import FloatBtn from '../../components/FloatBtn';


const AddAmount = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [data, setData] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container} className=" gap-4  "
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

    >

      <Text>AddAmount</Text>

      <View className="flex-row justify-center px-4 mt-4 gap-2">
        <View style={{ width: '48%' }} className="gap-2">
          <Text className='px-4'><Text><FontAwesome5 name="calendar-alt" size={24} color="black" /></Text>  Date</Text>
          <View style={styles.datePickContainer} className="">
            <DatePick modeOfpiker="date"></DatePick>
          </View>
        </View>
        <View style={{ width: '48%' }} className="gap-2">
          <Text className='px-4'><Text><AntDesign name="clock-circle" size={24} color="black" /></Text>  Time</Text>
          <View style={styles.datePickContainer} className="">
            <DatePick modeOfpiker="time"></DatePick>
          </View>
        </View>
      </View>

      <BtnBoolean isTrue={isTrue} setIsTrue={setIsTrue} text1={"good"} text2={"bad"}></BtnBoolean>

      <TextInputBox
        data={data}
        setData={setData}
        leadComp={
          <FontAwesome name="money" size={16} color="black" />
        } />
      <TextInputBox
        data={data}
        setData={setData}
        leadComp={
          <FontAwesome name="money" size={16} color="black" />
        } />
        <FloatBtn></FloatBtn>

      {/* <TextInputBox
        data={data}
        setData={setData}
        leadComp={
          <FontAwesome name="money" size={16} color="black" />
        }
        placeholder={'Description (Optional)'}
        keyboardType={'default'}
        containerStyle={{ height: 56, paddingTop: 12, alignItems: 'flex-start' }}
        inputStyle={{ textAlignVertical: 'top' }}
      /> */}



    </KeyboardAvoidingView>
  )
}

export default AddAmount

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  datePickContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,

    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderColor: '#e5e7eb',


  },

})