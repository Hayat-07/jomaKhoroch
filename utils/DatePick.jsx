import DateTimePicker from "@react-native-community/datetimepicker";
import { useState,} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function DatePick({ modeOfpiker,}) {
    
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState('date');
    //useEffect(() => {

        //setFormValue(prev => ({ ...prev, time: [date] }));
        //},[]);


    console.log('Date selected:', date);


    


    return (

        <View >
            

            <Pressable style={styles.btn} onPress={() => {
                setMode(modeOfpiker);
                setOpen(true);
            }}>
                <Text className=" text-green-600  text-xl justify-center items-center text-center">{modeOfpiker === 'date' ? date.toLocaleDateString(undefined, { weekday: 'short', month: 'numeric', day: 'numeric', year: 'numeric' }) : date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</Text>
            </Pressable>



            {
                open && (
                    <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        onChange={(event, selectedDate) => {
                            const currentDate = selectedDate || date;
                            setDate(currentDate);

                            setOpen(false);
                        }}
                    />
                )
            }
        </View>
    );
};


const styles = StyleSheet.create({
    btn: {
        
        
        justifyContent: "center",
        alignItems: "center",
        
        
        
        
    }
});