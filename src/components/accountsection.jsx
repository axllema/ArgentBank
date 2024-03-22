import React from 'react'; 
import Button from '../components/button.jsx';
import '../scss/components/_accountsection.scss';
import '../scss/style.scss'

function AccountSection() {
    const textlist = [
        {
        id: 1,
        title: "Argent Bank Checking (x8349)",
        text1: "$2,082.79",
        text2: "Available Balance",
        },
        {
        id: 2,
        title: "Argent Bank Savings (x6712)",
        text1: "$10,928.42",
        text2: "Available Balance",
        },
        {
        id: 3,
        title: "Argent Bank Credit Card (x8349)",
        text1: "$184.30",
        text2: "Current Balance",
        },
    ];

    return (
        <div className="account-content-wrapper">
        <h2 className="sr-only">Accounts</h2>
        {textlist.map((transaction) => (
            <section className="account" key={transaction.id}>
            <div className="account-content-wrapper">
                <h3 className="account-title">{transaction.title}</h3>
                <p className="account-amount">{transaction.text1}</p>
                <p className="account-amount-description">{transaction.text2}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button
                className="transaction-button"
                content="View transactions"
                />
            </div>
            </section>
        ))}
        </div>
    );
}

export default AccountSection;