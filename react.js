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
