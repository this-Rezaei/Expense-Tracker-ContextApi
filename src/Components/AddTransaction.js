import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
    const [text, settext] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const submitHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount,
        };
        addTransaction(newTransaction);
        setAmount("");
        settext("");
    };
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        id="text"
                        type="text"
                        value={text}
                        onChange={(e) => settext(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        id="amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button type="submit" className="btn">
                    Add transaction
                </button>
            </form>
        </>
    );
};
