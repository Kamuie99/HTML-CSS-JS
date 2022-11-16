var account = {
    owner : "황기태",
    code : "111",
    balance : 35000,

    inquiry : function() {return this.balance;},
    deposit : function(money) {this.balance += money;},
    withdraw : function(money) {this.balance -= money; return money;}
}