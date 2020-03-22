const customer ={
    name: 'jino',
    accNum:'SBI123',
    balance: 1700,
    transaction:function(amount, code){
        if(code == 1){    //code 0 ->withdrawl ; code 1 ->deposit
            this.balance = this.balance + amount;
            return `deposit = ${amount} and your account balance is ${this.balance}`
        }else{
            if(amount > this.balance){
                return `insufficient balance and you only have ${this.balance} in your account`
            }else{
                this.balance = this.balance - amount;
                return `withdrawl = ${amount} and your account balance is ${this.balance}`
            }
        }
    },
    currentBalance:function(){
        return `your balance is ${this.balance}`
    }
}
console.log(customer.currentBalance());
console.log(customer.transaction(300, 1));
console.log(customer.transaction(2500, 0));
console.log(customer.transaction(1000, 0));
console.log(customer.currentBalance());

/*
    deposit = 300 and your account balance is 2000
    insufficient balance and you only have 2000 in your account
    withdrawl = 1000 and your account balance is 1000
    your balance is 1000
*/




/*keep in mind... this code is not totally correct
transaction:function(amount, code){
    if(code == 0){
        this.balance = this.balance - amount;  //:you are getting the balance in negative
        if(this.balance < 0 ){
            return 'insufficient balance'
        }
        else{
            return `withdrawl= ${amount} and your balance is ${this.balance} ;`
        }

    }else{
        this.balance = this.balance + amount;
        return `deposit = ${this.balance}`
    }
},
*/