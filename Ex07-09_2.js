document.write("account : ");
document.write(account.owner + ", ");
document.write(account.code + ", ");
document.write(account.balance + "<br>");

account.deposit(10000);
document.write("10000원 저금 후 잔액은 " + account.inquiry() + "<br>");
account.withdraw(5000);
document.write("5000원 인출 후 잔액은 " + account.inquiry() + "<br>");