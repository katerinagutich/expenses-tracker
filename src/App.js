import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Shopping',
        amount: 145.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'English Courses',
        amount: 59.29,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Taxi',
        amount: 94.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Laptop',
        amount: 350.00,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'Birthday Party',
        amount: 295.18,
        date: new Date(2021, 1, 3),
    },
    {
        id: 'e6',
        title: 'Doctor consultation',
        amount: 123.87,
        date: new Date(2020, 4, 17),
    },
];

function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
