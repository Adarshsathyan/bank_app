class Bank{
    createAccount(){
        let name = username.value;
        let acno = accno.value;
        let password = pass.value;
        let bal = balance.value;

        let person = {
            name,
            acno,
            password,
            balance:bal
        }
        localStorage.setItem(person.acno,JSON.stringify(person))
        alert("Account created")
        location.href="../login/index.html"

    }
    

}
var bank = new Bank;

// let validateAccount=(accno)=>{
//    return accno in localStorage ? true:false
// }


// let getBalance=(accno)=>{
//     if(validateAccount(accno)){
//         let data = JSON.parse(localStorage.getItem(accno))
//         return data.balance;
//     }
// }



// let authenticate = (accno,password)=>{
//     if(validateAccount(accno)){
//         let data = JSON.parse(localStorage.getItem(accno))
//         return data.password == password?"Success":"failed"
//     }else{
//         return "Invalid account number"
//     }
// }

// let fundTransfer=(from_ac,to_ac,amount)=>{
//     if(validateAccount(from_ac)){
//         let debit_ac = JSON.parse(localStorage.getItem(from_ac));
//         if(debit_ac.balance>amount){

//         }else{
//             return "Insufficent balance"
//         }
//     }
    

// }