
let credit = 35;
let accountNumber = 'NL RAB 0133 757';

// Alert credit
function showAccount() {
    window.alert(`Uw saldo is momenteel ${credit} euro.`);
}

// Stort amount op credit
function depositMoney(amount) {
    credit += amount;
    window.alert(`Uw nieuwe saldo is ${credit} euro.`);

    console.log(`Nieuw krediet: ${credit}`);
}

// Stuur credit naar accountnumber
function sendMoney(amount, account) {
    // ... mits er genoeg op de rekening staat
    if (amount > credit) {
        window.alert("U hebt niet genoeg saldo om dit te doen!");
        return;
    }

    credit -=amount;
    window.alert(`Er is ${amount} euro gestuurd naar ${accountNumber}`);
}

showAccount();
depositMoney(20);
sendMoney(100, accountNumber);