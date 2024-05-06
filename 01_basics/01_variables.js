const account_ID = 144553
let account_email = "shivam@gmail.com"
var account_pass = "12345"
account_city = "pune"
let account_state;

// account_ID = 2 when ever we use const we cannot change its value!!!

account_email = "hehe@gmail.com"
account_pass = "1123"
account_city = "nanded"

console.log(account_ID);

/* do not use var
bcuz of issue in block scope and functional scope 
*/

console.table([account_ID,account_email,account_pass,account_city,account_state]);