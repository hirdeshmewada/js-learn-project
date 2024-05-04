const accountId=1445
let accountEmail="hirdesh@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId = 2 not allows
accountEmail="hc@hc.com"
accountPassword="232323"
accountCity="Bhopal"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])