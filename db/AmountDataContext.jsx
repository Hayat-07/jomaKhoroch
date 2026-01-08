import React, { createContext, useEffect, useState } from 'react';

export const amountDataContext = createContext();

const sampleAmountData = [
  {
    id: "1704691200001",
    amount: 5000,
    date: new Date("2025-01-01"),
    time: new Date("2025-01-01T09:30:00"),
    type: "Income",
    title: "Salary",
    note: "January salary"
  },
  {
    id: "1704691200002",
    amount: 1200,
    date: new Date("2025-01-02"),
    time: new Date("2025-01-02T14:00:00"),
    type: "Expense",
    title: "Groceries",
    note: "Weekly groceries"
  },
  {
    id: "1704691200003",
    amount: 300,
    date: new Date("2025-01-03"),
    time: new Date("2025-01-03T18:20:00"),
    type: "Expense",
    title: "Transport",
    note: "Rickshaw & bus"
  },
  {
    id: "1704691200004",
    amount: 800,
    date: new Date("2025-01-04"),
    time: new Date("2025-01-04T20:00:00"),
    type: "Expense",
    title: "Dinner",
    note: "Restaurant bill"
  },
  {
    id: "1704691200005",
    amount: 1500,
    date: new Date("2025-01-05"),
    time: new Date("2025-01-05T11:15:00"),
    type: "Income",
    title: "Freelance",
    note: "UI design project"
  },
  {
    id: "1704691200006",
    amount: 400,
    date: new Date("2025-01-06"),
    time: new Date("2025-01-06T08:45:00"),
    type: "Expense",
    title: "Mobile Recharge",
    note: ""
  },
  {
    id: "1704691200007",
    amount: 250,
    date: new Date("2025-01-07"),
    time: new Date("2025-01-07T16:10:00"),
    type: "Expense",
    title: "Snacks",
    note: "Tea & snacks"
  },
  {
    id: "1704691200008",
    amount: 2000,
    date: new Date("2025-01-08"),
    time: new Date("2025-01-08T10:30:00"),
    type: "Income",
    title: "Bonus",
    note: "Performance bonus"
  },
  {
    id: "1704691200009",
    amount: 600,
    date: new Date("2025-01-09"),
    time: new Date("2025-01-09T19:00:00"),
    type: "Expense",
    title: "Internet Bill",
    note: "Monthly WiFi"
  },
  {
    id: "1704691200010",
    amount: 1000,
    date: new Date("2025-01-10"),
    time: new Date("2025-01-10T13:45:00"),
    type: "Income",
    title: "Gift",
    note: "Received from friend"
  }
];



const AmountDataContextProvider = ({ children }) => {
  const [arrayOfData, setArrayOfData] = useState(sampleAmountData);
  const [thisMonthData, setThisMonthData] = useState([]);
  const [statisticData, setStatisticData] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

 useEffect(() => {
    const currentMonth = new Date().getMonth();
    const filteredData = arrayOfData.filter(item => item.date.getMonth() === selectedMonth);
    setThisMonthData(filteredData);
  }, [arrayOfData]);

  useEffect(() => {
    const income = arrayOfData
      .filter(item => item.type === 'Income')
      .reduce((sum, item) => sum + item.amount, 0);
    const expense = arrayOfData
      .filter(item => item.type === 'Expense')
      .reduce((sum, item) => sum + item.amount, 0);
    const balance = income - expense;

    setStatisticData({
      income: income,
      expense: expense,
      balance: balance
    });
  }, [arrayOfData]);


  return (
    <amountDataContext.Provider value={{
      arrayOfData,
      setArrayOfData,
      statisticData,
      setStatisticData,
      selectedMonth, 
      setSelectedMonth

    }}>
      {children}
    </amountDataContext.Provider>
  )
}

export default AmountDataContextProvider

