function Customer(name, balance, accNum){
    this.name = name;
    this.balance =balance;
    this.accNum = accNum;
    this.transaction = function(code, amount){
        if(code == 1){                             //1-deposit, 0-withdrawl
            this.balance += amount;
            return `balance = ${this.balance}`
        }else{
            if(amount > this.balance){
                return `insufficient balance`
            }else{
                this.balance = this.balance - amount; 
                return `withdrawl = ${amount}, current balance = ${this.balance}`
            }
        }
    };
    this.getBalance = function(){
        return `balance = ${this.balance}`
    }

}

const C1 = new Customer('jino', 5000, 04352);
console.log(C1.transaction(1, 1000));
console.log(C1.transaction(0, 9000));
console.log(C1.transaction(0, 3000));

/*
balance = 6000
insufficient balance
withdrawl = 3000, current balance = 3000
*/

console.log(C1);

/*
Customer {
  name: 'jino',
  balance: 3000,
  accNum: 2282,
  transaction: [Function],
  getBalance: [Function] }
*/