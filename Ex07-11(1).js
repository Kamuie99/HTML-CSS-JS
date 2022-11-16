function Account(owner, code, balance) {
    this.owner = owner;
    this.code = code;
    this.balance = balance;

    this.inquiry = function() { return this.balance; }
    this.deposit = function(money) { this.bablance += money; }
    this.withdraw = function(money) { this.balance -= money; return money;}
}