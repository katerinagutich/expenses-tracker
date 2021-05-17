import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Shopping',
        amount: 194.12,
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
        amount: 14.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Laptop',
        amount: 450,
        date: new Date(2021, 5, 12),
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
