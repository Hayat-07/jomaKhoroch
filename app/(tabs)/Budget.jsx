import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
    HelperText,
    Modal,
    ProgressBar,
    TextInput
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FABmy from '../../components/FABmy';

const budgetItems = [
    {
        budgetName: 'Food',
        budget: 1000,
        expense: 500,
        date: new Date().toISOString(),
    },
    {
        budgetName: 'Study',
        budget: 4000,
        expense: 1500,
        date: new Date().toISOString(),
    },
];

const Budget = () => {
    const [openModal, setOpenModal] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [allBudgetItems, setAllBudgetItems] = useState(budgetItems);
    const [totalAmounts, setTotalAmounts] = useState({
        totalBudget: 0,
        totalExpense: 0,
        totalRemaining: 0,
    });
    const [budgetName, setBudgetName] = useState('');
    const [expense, setExpense] = useState('');
    const [budget, setBudget] = useState('');
    const [selectedItemId, setSelectedItemId] = useState(null);

    useEffect(() => {
        const totals = allBudgetItems.reduce(
            (acc, item) => ({
                totalBudget: acc.totalBudget + Number(item.budget),
                totalExpense: acc.totalExpense + Number(item.expense),
                totalRemaining:
                    acc.totalRemaining + (item.budget - item.expense),
            }),
            { totalBudget: 0, totalExpense: 0, totalRemaining: 0 }
        );

        setTotalAmounts(totals);
    }, [allBudgetItems]);

    const handleSubmit = () => {
        if (!budgetName) {
            setErrorText('Budget Name is required');
            return;
        }

        if (!budget) {
            setErrorText('Please add Budget amount');
            return;
        }

        setErrorText('');

        const item = {
            budgetName,
            budget: Number(budget),
            expense: Number(expense || 0),
            date: new Date().toISOString(),
        };

        setAllBudgetItems(prev =>
            selectedItemId !== null
                ? prev.map((it, i) => (i === selectedItemId ? item : it))
                : [...prev, item]
        );

        setBudgetName('');
        setBudget('');
        setExpense('');
        setSelectedItemId(null);
        setOpenModal(false);
    };


    const deleteItem = index => {
        setAllBudgetItems(prev => prev.filter((_, i) => i !== index));
    };





    return (
        <SafeAreaView style={{ flex: 1 }} className="items-center bg-gray-100">
            {/* HEADER */}
            <View className='justify-center  items-start mt-4 w-[90%] pl-4'>
                <Text className="text-2xl font-bold text-start ">Income & Expence</Text>
            </View>
            <View className="flex-row justify-between items-center w-[90%] my-10 px-4">
                <View>
                    <Text className="text-gray-500">Expense</Text>
                    <Text className="text-2xl font-extrabold text-red-500">
                        {totalAmounts.totalExpense}
                    </Text>
                </View>

                <AnimatedCircularProgress
                    size={140}
                    width={12}
                    fill={
                        (totalAmounts.totalExpense /
                            totalAmounts.totalBudget) *
                        100 || 0
                    }
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                >
                    {() => (
                        <View className="items-center">
                            <Text className="text-xs text-gray-400">Total Budget</Text>
                            <Text className="text-xl font-bold">
                                {totalAmounts.totalBudget}
                            </Text>
                        </View>
                    )}
                </AnimatedCircularProgress>

                <View>
                    <Text className="text-gray-500">Remaining</Text>
                    <Text className="text-2xl font-extrabold text-green-600">
                        {totalAmounts.totalRemaining}
                    </Text>
                </View>
            </View>

            {/* LIST */}
            <FlatList
                data={allBudgetItems}
                keyExtractor={(item, index) =>
                    `${index}-${item.budgetName}`
                }
                className="w-[90%]"
                renderItem={({ item, index }) => {
                    const progress = item.budget
                        ? item.expense / item.budget
                        : 0;
                    const percent = Math.round(progress * 100);

                    return (
                        <View className="w-full bg-white p-4 rounded-xl mb-3 shadow-sm">
                            <View className="flex-row w-full justify-between">
                                <Text className="font-extrabold text-lg">
                                    {item.budgetName}
                                    <Text className="text-slate-400 font-normal">
                                        {' '}
                                        ({item.budget}tk)
                                    </Text>
                                </Text>
                                {/* <Pressable>
                                    <Entypo name="dots-three-vertical" size={24} color="black" />
                                </Pressable> */}
                                <FABmy itemData={item} newStyles={{}} fn={{ id: index, setBudgetName, setExpense, setBudget }} setOpenModal={setOpenModal} setSelectedItemId={setSelectedItemId} deleteItem={deleteItem}></FABmy>
                            </View>

                            <ProgressBar
                                progress={progress}
                                color={progress > 0.9 ? 'red' : 'green'}
                                style={{
                                    height: 8,
                                    borderRadius: 5,
                                    marginTop: 12,
                                    backgroundColor: '#eee',
                                }}
                            />

                            <View className="w-full flex-row justify-between items-center mt-2">
                                <Text className="text-gray-500">
                                    Spent: {item.expense}
                                </Text>
                                <Text className="text-xs font-bold">{percent}%</Text>
                                <Text className="text-gray-500">
                                    Left: {item.budget - item.expense}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />

            {/* FAB */}
            <TouchableOpacity
                onPress={() => setOpenModal(true)}
                className="rounded-full w-20 h-20 bg-green-600 justify-center items-center"
                style={{
                    elevation: 12,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                }}
            >
                <FontAwesome6 name="add" size={24} color="white" />
            </TouchableOpacity>







            {/* MODAL */}
            <Modal visible={openModal} transparent animationType="fade">
                <View className="h-full justify-center items-center bg-black/80">
                    <View className="bg-white h-[400] w-[80%] rounded-2xl p-6 gap-4 justify-center">
              
                        <Text className=' text-xl font-bold '>{selectedItemId !== null ? "Update Budget" : "Add Budget"}
                        </Text>

                        <TextInput
                            label="Budget Name"
                            value={budgetName}
                            onChangeText={setBudgetName}
                            mode="outlined"
                            error={!!errorText}
                        />

                        <TextInput
                            label="Budget Amount"
                            value={budget}
                            onChangeText={setBudget}
                            mode="outlined"
                            keyboardType="numeric"
                            error={!!errorText}
                        />

                        <TextInput
                            label="Expense"
                            value={expense}
                            onChangeText={setExpense}
                            mode="outlined"
                            keyboardType="numeric"
                            error={!!errorText}
                        />

                        <HelperText type="error" visible={!!errorText}>
                            {errorText}
                        </HelperText>

                        <View className="flex-row justify-between items-center w-full">
                            <Pressable
                                onPress={() => {
                                    setBudgetName('');
                                    setExpense('');
                                    setBudget('');
                                    setOpenModal(false)
                                }}
                                style={styles.btn}
                                className="bg-slate-200 flex-row gap-2"
                            >
                                <MaterialIcons
                                    name="cancel"
                                    size={24}
                                    color="gray"
                                />
                                <Text>Cancel</Text>
                            </Pressable>

                            <Pressable
                                onPress={handleSubmit}
                                style={styles.btn}
                                className="bg-green-600"
                            >
                                <Text className="text-white font-bold">{selectedItemId !== null ? "Update Budget" : "Add Budget"}
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default Budget;

const styles = StyleSheet.create({
    btn: {
        width: '48%',
        borderRadius: 24,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
