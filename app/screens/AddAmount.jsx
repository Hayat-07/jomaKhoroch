import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import FloatBtn from '../../components/FloatBtn';
import { amountDataContext } from '../../db/AmountDataContext';
import BtnBoolean from '../../utils/BtnBoolean';
import DatePick from '../../utils/DatePick';
import TextInputBox from '../../utils/TextInputBox';
import { Alert } from 'react-native';

const AddAmount = ({ }) => {
  const { id } = useLocalSearchParams();
  console.log("id from params:", id);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const { arrayOfData, setArrayOfData } = useContext(amountDataContext);

  const [amountDetails, setAmountDetails] = useState({
    amount, time, date, type, title, note,
    id: ''
  });

  useEffect(() => {
    if (id) {
      const existingData = arrayOfData.find((data) => data.id === id);
      if (existingData) {
        setAmount(existingData.amount);
        setTime(existingData.time);
        setDate(existingData.date);
        setType(existingData.type);
        setTitle(existingData.title);
        setNote(existingData.note);
      }
    }
  }, [id, arrayOfData]);


  console.log(amountDetails);


  useEffect(() => {
    setAmountDetails(prev => ({
      ...prev,
      amount, time, date, type, title, note
    }));
  }, [amount, time, date, type, title, note]);


  const handleSubmit = () => {
    setArrayOfData([...arrayOfData, {...amountDetails, id: new Date().getTime().toString()}]);
    setDate(new Date());
    setTime(new Date());
    setType('Income');
    setAmount(0);
    setTitle('');
    setNote('');
    router.back();
    
    Alert.alert(
      "Saved",
      "Your amount has been added"
    );

    console.log(amountDetails);
  };
  // fix name typo too
  const handleUpdate = () => {
    const updatedData = arrayOfData.map((data) =>
      data.id === id ? { ...data, ...amountDetails, id: data.id } : data
    );
    setArrayOfData(updatedData);
    console.log("updatedData ::",updatedData);
    Alert.alert(
      "Updated",
      "Your amount has been updated"
    );
    router.back();
  };

  return (
    <KeyboardAvoidingView style={styles.container} className=" gap-4   "
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 60}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 220 }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      // automaticallyAdjustKeyboardInsets={true}
      >
        <View className="gap-4">
          <Text className="text-xl self-center mt-10">AddAmount</Text>
          <BtnBoolean type={type} setType={setType} text1={"Income"} text2={"Expense"}></BtnBoolean>
          <View className="flex-row justify-center px-4 mt-4 gap-2">
            <View style={{ width: '48%' }} className="gap-2">
              <Text className='px-4'><Text><FontAwesome5 name="calendar-alt" size={24} color="black" /></Text>  Date</Text>
              <View style={styles.datePickContainer} className="">
                <DatePick modeOfpiker="date" setData={setDate}></DatePick>
              </View>
            </View>
            <View style={{ width: '48%' }} className="gap-2">
              <Text className='px-4'><Text><AntDesign name="clock-circle" size={24} color="black" /></Text>  Time</Text>
              <View style={styles.datePickContainer} className="">
                <DatePick modeOfpiker="time" setData={setTime}></DatePick>
              </View>
            </View>
          </View>


          <TextInputBox
            data={amount}
            setData={setAmount}
            placeholder='Amount'
            keyboardType='numeric'
            name={'amount'}
            leadComp={
              <FontAwesome name="money" size={16} color="black" />
            } />
          <TextInputBox
            data={title}
            setData={setTitle}
            placeholder='Title'
            keyboardType='default'
            name={'title'}
            leadComp={
              <FontAwesome name="money" size={16} color="black" />
            } />
          <TextInputBox
            data={note}
            setData={setNote}
            placeholder='Add Note (Optional)'
            keyboardType='default'
            name={'note'}
            leadComp={
              <FontAwesome name="money" size={16} color="black" />
            }
            multiline={true}
            numberOfLines={4}
          />

          <FloatBtn text={id ? "Update Amount" : "Add Amount"} fn={id ? handleUpdate : handleSubmit} newStyles={{ backgroundColor: "#0f172a", borderColor: "#0f172a", height: 56, marginTop: 16, borderWidth: 1 }}></FloatBtn>



        </View>

      </ScrollView>





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