function createAccount(newPin, newAmount = 0) {
    let pin = newPin;
    let amount = newAmount;
    return {
        checkBalance: (input)=>{
            if(input === pin){
                return `$${amount}`
            }
            return "Invalid PIN."
        },
        deposit: (pinInput, money)=>{
            if(pinInput === pin){
                amount += money;
                return `Succesfully deposited $${money}. Current balance: $${amount}.`
            }
            return "Invalid PIN."
        },
        withdraw: (pinInput, money)=>{
            if(pinInput === pin){
                if(money > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                amount -= money;
                return `Succesfully withdrew $${money}. Current balance: $${amount}.`
            }
            return "Invalid PIN."
        },
        changePin: (pinInput, newPin)=>{
            if(pinInput === pin){
                pin = newPin;
                return "PIN successfully changed!"
            }
            return "Invalid PIN."
        },
    }
}

module.exports = { createAccount };
