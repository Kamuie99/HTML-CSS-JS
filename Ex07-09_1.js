function inquiry () { return this.balance; }
function deposit(money) { this.balance += money; }
function withdraw(money) { this.balance -= money; return money; }

var account = new Object();
account.owner = "황기태";
account.code = "111";
account.balance = 35000;
account.inquiry = inquiry;
account.deposit = deposit;
account.withdraw = withdraw;