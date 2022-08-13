//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Use if with &&, to return the las part: <p>No expenses found.</p>.

{filteredExpenses.length === 0 && <p>No expenses found.</p>}
{filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ))
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//----------START-useState-examples-START-------------------------------------START-useState-examples-START-------------------------------------START-useState-examples-START-------------------------------------
//-> 1 ---------------

const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
};

const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
};

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
};

//-> 2: ---------------

const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
});
setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
});
setUserInput((prevState) => {
    return { ...prevState, enteredAmount: event.target.value };
});
setUserInput((prevState) => {
    return { ...prevState, enteredDate: event.target.value };
});

//-> 3: ---------------

const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
});

const amountChangeHandler = (event) => {
    setUserInput({...userInput,  enteredTitle: event.target.value});
};
const amountChangeHandler = (event) => {
    setUserInput({...userInput,  enteredAmount: event.target.value});
};
const amountChangeHandler = (event) => {
    setUserInput({...userInput,  enteredDate: event.target.value});
};

//----------END-useState-examples-END-----------------------------------------END-useState-examples-END-----------------------------------------END-useState-examples-END-----------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------